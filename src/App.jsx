import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom";

// Page & Component Imports
import Home from "./pages/Home";
import InvestPage from "./pages/InvestPage";
import JointVenturesPage from "./pages/JointVenturesPage";
import SubmitDealPage from "./pages/SubmitDealPage";
import AuthPage from "./pages/AuthPage";
import InvestorDashboard from "./pages/InvestorDashboard";
import ClientPortal from "./components/ClientPortal";
import FinancingPage from "./pages/FinancingPage";
import BCFCOriginationPage from "./pages/BCFCOriginationPage";
import BCFCServicesPage from "./pages/BCFCServicesPage";
import BCFCResidentialPage from "./pages/BCFCResidentialPage";
import WorkspaceAccessPage from "./pages/WorkspaceAccessPage";
import PlatformPage from "./pages/PlatformPage";
import FlintPage from "./pages/FlintPage";
import BCFCInquiryPage from "./pages/BCFCInquiryPage";
import GroundLensBrand from "./components/GroundLensBrand";

function App() {
  const location = useLocation();
  useEffect(() => {
    const titles = {'/':'Ground Lens | Property research, grounded in place','/platform':'The platform | Ground Lens','/flint':'Why Flint | Ground Lens','/financing':'BCFC | Business-purpose services · Ground Lens','/financing/inquiry':'BCFC service inquiry | Ground Lens','/financing/origination':'Business-purpose origination | BCFC · Ground Lens','/financing/services':'Administration, processing & servicing | BCFC · Ground Lens','/financing/residential':'Residential mortgages — Coming Soon | BCFC · Ground Lens'};
    document.title = titles[location.pathname] || 'Ground Lens';
    const description = document.querySelector('meta[name="description"]');
    if(description) description.content = location.pathname.startsWith('/financing') ? 'BCFC, a Ground Lens subsidiary. Business-purpose origination, administration, and processing. Residential mortgages: Coming Soon.' : 'Ground Lens connects property records, site context, and project assumptions for thoughtful local development.';
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement('link'));
    canonical.rel = 'canonical'; canonical.href = 'https://thegroundlens.com' + location.pathname;
    const frame = requestAnimationFrame(() => {
      if(location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
      else { window.scrollTo(0,0); document.getElementById('page-content')?.focus({preventScroll:true}); }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeApplications, setActiveApplications] = useState([]);
  const closeMenu = () => setMenuOpen(false);

  // Function to handle product applications and forward to the dashboard
  const handleApplyForProduct = (productPayload, navigateFunction) => {
    setActiveApplications((prev) => [productPayload, ...prev]);
    if (navigateFunction) {
      navigateFunction('/investor-dashboard');
    }
  };

  return (
    <div className="gl-site-shell flex min-h-screen flex-col justify-between"><a href="#page-content" className="gl-skip-link">Skip to content</a>
      {/* Header / Global Navigation */}
      <header className="gl-header sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu} aria-label="Ground Lens home">
            <GroundLensBrand />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/platform">Platform</Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/flint">Why Flint</Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/financing">Buick City Financial</Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/login">Workspace sign in</Link>
            <Link to="/login" className="rounded-sm bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">Open workspace</Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onKeyDown={(event) => { if(event.key === "Escape") closeMenu(); }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">
            <Link to="/platform" onClick={closeMenu} className="text-slate-200">Platform</Link>
            <Link to="/flint" onClick={closeMenu} className="text-slate-200">Why Flint</Link>
            <Link to="/financing" onClick={closeMenu} className="text-slate-200">Buick City Financial</Link>
            <Link to="/login" onClick={closeMenu} className="text-slate-200">Workspace sign in</Link>
            <Link to="/login" onClick={closeMenu} className="rounded-sm bg-emerald-300 px-5 py-3 text-center font-semibold text-slate-950">Open workspace</Link>
          </nav>
        )}
      </header>

      {/* Dynamic View Rendering with React Router */}
      <div id="page-content" tabIndex={-1} className="flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/flint" element={<FlintPage />} />
          <Route path="/login" element={<WorkspaceAccessPage />} />
          <Route path="/app" element={<WorkspaceAccessPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/financing/origination" element={<BCFCOriginationPage />} />
          <Route path="/financing/services" element={<BCFCServicesPage />} />
          <Route path="/financing/residential" element={<BCFCResidentialPage />} />
          <Route path="/financing/inquiry" element={<BCFCInquiryPage />} />
          <Route path="/ground-lens" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<Navigate to="/financing/origination" replace />} />
          <Route path="/joint-ventures" element={<JointVenturesPage />} />
          <Route 
            path="/invest" 
            element={<InvestPage />} 
          />
          <Route path="/submit-deal" element={<SubmitDealPage />} />
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route 
            path="/investor-dashboard" 
            element={<InvestorDashboard activeApplications={activeApplications} />} 
          />
          <Route path="*" element={<main className="gl-not-found"><h1>Let’s get you back on track.</h1><p>That page could not be found.</p><Link to="/">Return to Ground Lens</Link></main>} />
        </Routes>
      </div>

      {/* Global Footer */}
      <footer className="gl-footer px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_1.2fr] sm:items-end">
          <div><p className="text-sm font-semibold tracking-[0.16em] text-white">GROUND LENS</p><p className="mt-2 text-sm text-slate-400">Property research rooted in Flint.</p><p className="mt-5 text-xs text-slate-600">© {new Date().getFullYear()} Ground Lens</p></div>
          <p className="max-w-2xl text-xs leading-6 text-slate-500">Buick City Financial Corporation is a Ground Lens subsidiary. Business-purpose origination, administration, and processing are subject to applicable requirements and readiness. Residential mortgage lending and brokerage: Coming Soon. No active mortgage license, rates, underwriting, funding, or product availability is represented.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

