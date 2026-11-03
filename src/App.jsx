import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Page & Component Imports
import Home from "./pages/Home";
import InvestPage from "./pages/InvestPage";
import JointVenturesPage from "./pages/JointVenturesPage";
import SubmitDealPage from "./pages/SubmitDealPage";
import AuthPage from "./pages/AuthPage";
import InvestorDashboard from "./pages/InvestorDashboard";
import ClientPortal from "./components/ClientPortal";
import FinancingPage from "./pages/FinancingPage";
import WorkspaceAccessPage from "./pages/WorkspaceAccessPage";
import PlatformPage from "./pages/PlatformPage";
import FlintPage from "./pages/FlintPage";
import BCFCInquiryPage from "./pages/BCFCInquiryPage";
import GroundLensBrand from "./components/GroundLensBrand";

function App() {
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
    <div className="flex min-h-screen flex-col justify-between bg-[#07111f] text-slate-100">
      {/* Header / Global Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu} aria-label="Ground Lens home">
            <GroundLensBrand />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 md:flex">
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
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">
            <Link to="/platform" onClick={closeMenu} className="text-slate-200">Platform</Link>
            <Link to="/flint" onClick={closeMenu} className="text-slate-200">Why Flint</Link>
            <Link to="/financing" onClick={closeMenu} className="text-slate-200">Buick City Financial</Link>
            <Link to="/login" onClick={closeMenu} className="text-slate-200">Workspace sign in</Link>
            <Link to="/login" onClick={closeMenu} className="rounded-sm bg-emerald-300 px-5 py-3 text-center font-semibold text-slate-950">Open workspace</Link>
          </nav>
        )}
      </header>

      {/* Dynamic View Rendering with React Router */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/flint" element={<FlintPage />} />
          <Route path="/login" element={<WorkspaceAccessPage />} />
          <Route path="/app" element={<WorkspaceAccessPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/financing/inquiry" element={<BCFCInquiryPage />} />
          <Route path="/ground-lens" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<Navigate to="/financing#pathways" replace />} />
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
        </Routes>
      </main>

      {/* Global Footer */}
      <footer className="border-t border-white/10 bg-[#07111f] px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_1.2fr] sm:items-end">
          <div><p className="text-sm font-semibold tracking-[0.16em] text-white">GROUND LENS</p><p className="mt-2 text-sm text-slate-400">Property research rooted in Flint.</p><p className="mt-5 text-xs text-slate-600">© {new Date().getFullYear()} Ground Lens</p></div>
          <p className="max-w-2xl text-xs leading-6 text-slate-500">Buick City Financial Corporation is an affiliated but separately operated B2B private lender. Financing inquiries are reviewed independently and remain subject to underwriting, availability, documentation, and applicable law.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

