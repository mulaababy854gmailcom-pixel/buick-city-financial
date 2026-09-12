import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Building2, Clock, CheckCircle2, AlertTriangle, XCircle, PlusCircle, ArrowRight } from 'lucide-react';

export default function ClientPortal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Grab any newly passed decision from navigation state
  const recentDecision = location.state?.decision;

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      // Query loan applications from Supabase
      let query = supabase.from('loan_applications').select('*').order('created_at', { ascending: false });
      
      // If user is authenticated, filter by user_id. If anonymous demo, fetch all recent or local storage items.
      if (user?.id) {
        query = query.eq('user_id', user.id);
      }

      const { data, error } = await query;
      if (error) throw error;
      setApplications(data || []);
    } catch (err) {
      console.error('Error fetching applications:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pre-Approved':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Pre-Approved
          </span>
        );
      case 'Conditional':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5" /> Conditional Review
          </span>
        );
      case 'Denied':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <XCircle className="w-3.5 h-3.5" /> Declined
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Clock className="w-3.5 h-3.5" /> In Review
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 py-12 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Portal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-2">
              Client Portal Dashboard
            </div>
            <h1 className="text-3xl font-bold text-white">Active Loan Applications</h1>
            <p className="text-sm text-slate-400 mt-1">Track underwriting progress, decision statuses, and portfolio documentation.</p>
          </div>
          <button
            onClick={() => navigate('/submit-deal')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-300 hover:bg-sky-200 text-slate-950 text-xs font-semibold rounded-full transition shadow-lg shadow-sky-300/20"
          >
            <PlusCircle className="w-4 h-4" /> Submit New Deal
          </button>
        </div>

        {/* Recent Submission Alert Box (if coming straight from Deal Wizard) */}
        {recentDecision && (
          <div className="rounded-2xl border border-sky-300/30 bg-gradient-to-r from-sky-950/50 to-slate-900 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-1">Latest Evaluation Notification</h3>
            <p className="text-sm text-sky-200 font-medium mb-2">{recentDecision.status}: {recentDecision.reason}</p>
            <p className="text-xs text-slate-400">Your file has been logged in the secure institutional ledger below.</p>
          </div>
        )}

        {/* Applications List */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 text-sm">Loading portfolio data from secure database...</div>
        ) : applications.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <Building2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-white mb-1">No Applications Found</h3>
            <p className="text-sm text-slate-400 mb-6">You haven't submitted any commercial real estate deals yet.</p>
            <button
              onClick={() => navigate('/submit-deal')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition"
            >
              Launch Deal Wizard
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {applications.map((app) => (
              <div key={app.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-700 transition">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">{app.product_name}</span>
                    {getStatusBadge(app.status)}
                  </div>
                  <div className="text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Entity:</strong> {app.entity_name || 'N/A'}</span>
                    <span><strong>Property:</strong> {app.property_address || 'N/A'}</span>
                    <span><strong>Requested:</strong> ${Number(app.loan_amount || 0).toLocaleString()}</span>
                  </div>
                  {app.underwriting_notes && (
                    <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80 mt-2">
                      <strong>Underwriting Note:</strong> {app.underwriting_notes}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-slate-500">
                    {new Date(app.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}