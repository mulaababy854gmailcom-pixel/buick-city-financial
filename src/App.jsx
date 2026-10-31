import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Page & Component Imports
import Home from "./pages/Home";
import InvestPage from "./pages/InvestPage";
import JointVenturesPage from "./pages/JointVenturesPage";
import ProductsPage from "./pages/ProductsPage";
import SubmitDealPage from "./pages/SubmitDealPage";
import AuthPage from "./pages/AuthPage";
import InvestorDashboard from "./pages/InvestorDashboard";
import ClientPortal from "./components/ClientPortal";
import FinancingPage from "./pages/FinancingPage";
import WorkspaceAccessPage from "./pages/WorkspaceAccessPage";

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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-300/40 bg-emerald-300/10">
              <Compass className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white">
                GROUND LENS
              </p>
              <p className="text-[10px] tracking-[0.18em] text-emerald-300">
                PROPERTY RESEARCH
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/#how-it-works">
              How it works
            </Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/login">Workspace sign in</Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/financing">
              BCFC financing
            </Link>
            <Link
              to="/financing"
              className="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Financing inquiries
            </Link>
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
            <Link to="/#how-it-works" onClick={closeMenu} className="text-slate-200">
              How it works
            </Link>
            <Link to="/login" onClick={closeMenu} className="text-slate-200">Workspace sign in</Link>
            <Link to="/financing" onClick={closeMenu} className="text-slate-200">
              BCFC financing
            </Link>
            <Link
              to="/financing"
              onClick={closeMenu}
              className="rounded-full bg-emerald-300 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Financing inquiries
            </Link>
          </nav>
        )}
      </header>

      {/* Dynamic View Rendering with React Router */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<WorkspaceAccessPage />} />
          <Route path="/app" element={<WorkspaceAccessPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/ground-lens" element={<Navigate to="/" replace />} />
          <Route 
            path="/products" 
            element={<ProductsPage onApplyForProduct={handleApplyForProduct} />} 
          />
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
      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ground Lens · Flint, Michigan</p>
          <p className="max-w-2xl">Ground Lens provides property research tools. Buick City Financial Corporation is an affiliated, separately operated B2B private lender. Financing inquiries are reviewed independently and are subject to underwriting, availability, documentation, and applicable law.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

