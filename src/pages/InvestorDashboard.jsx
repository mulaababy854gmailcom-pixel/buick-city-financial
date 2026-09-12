import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, ShieldCheck, Layers } from 'lucide-react';

export default function InvestorDashboard() {
  const [profile, setProfile] = useState(null);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadInvestorData() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate('/portal');
        return;
      }

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setProfile(profileData);

      const { data: positionData } = await supabase
        .from('investor_positions')
        .select('*')
        .eq('user_id', user.id);

      setPositions(positionData || []);
      setLoading(false);
    }

    loadInvestorData();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/portal');
  };

  const totalInvested = positions.reduce((acc, pos) => acc + Number(pos.capital_invested), 0);
  const totalYield = positions.reduce((acc, pos) => acc + Number(pos.yield_paid_to_date), 0);

  if (loading) {
    return <div className="p-16 text-center text-slate-400 font-medium">Loading investment records...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-800 gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Accredited LP Portal</span>
          <h1 className="text-3xl font-bold text-white mt-1">
            {profile?.full_name || 'Investor Dashboard'}
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">Entity: {profile?.company_name || 'Individual Corporate Account'}</p>
        </div>
        <button 
          onClick={handleSignOut}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold px-4 py-2.5 rounded-xl transition"
        >
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-[#0b1320] border border-slate-800 p-6 rounded-3xl">
          <div className="flex justify-between items-center text-sky-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Capital Placed</span>
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-white">${totalInvested.toLocaleString()}</div>
        </div>

        <div className="bg-[#0b1320] border border-slate-800 p-6 rounded-3xl">
          <div className="flex justify-between items-center text-emerald-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Yield Paid to Date</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-emerald-400">${totalYield.toLocaleString()}</div>
        </div>

        <div className="bg-[#0b1320] border border-slate-800 p-6 rounded-3xl">
          <div className="flex justify-between items-center text-amber-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Deals</span>
            <Layers className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-white">{positions.length}</div>
        </div>
      </div>

      <div className="bg-[#0b1320] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white">Active Debt & JV Placements</h3>
        </div>

        {positions.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            No active capital allocations found. Contact underwriting to review open project placements.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#060b13] text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Project</th>
                  <th className="p-4">Capital Placed</th>
                  <th className="p-4">Equity Share</th>
                  <th className="p-4">Pref Return</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {positions.map((pos) => (
                  <tr key={pos.id} className="hover:bg-slate-900/50">
                    <td className="p-4 font-bold text-white">{pos.project_name}</td>
                    <td className="p-4">${Number(pos.capital_invested).toLocaleString()}</td>
                    <td className="p-4 text-sky-400 font-semibold">{pos.current_equity_pct}%</td>
                    <td className="p-4 text-emerald-400">{pos.preferred_return_rate}% APR</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <ShieldCheck className="w-3 h-3" /> {pos.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}