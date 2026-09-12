import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      
      if (error) {
        setErrorMsg(error.message);
      } else if (data.user) {
        await supabase.from('profiles').insert([
          { id: data.user.id, full_name: fullName, company_name: companyName, role: 'investor' }
        ]);
        navigate('/investor-dashboard');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMsg(error.message);
      } else {
        navigate('/investor-dashboard');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-[#0b1320] border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-1">
          {isSignUp ? 'Create Investor Account' : 'Portal Sign In'}
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Buick City Financial Corporation Private LP Portal
        </p>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-sky-300"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Entity Name</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-sky-300"
                />
              </div>
            </>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Corporate Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-sky-300"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-sky-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-300 hover:bg-sky-200 text-slate-950 font-bold py-3.5 rounded-xl transition-all"
          >
            {loading ? 'Processing...' : isSignUp ? 'Register Account' : 'Sign In'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-center text-xs text-slate-400 mt-6 hover:text-white"
        >
          {isSignUp ? 'Already registered? Sign In' : 'Need an LP account? Register here'}
        </button>
      </div>
    </div>
  );
}