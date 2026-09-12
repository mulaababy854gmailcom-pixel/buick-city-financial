import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Page & Component Imports
import Home from "./pages/Home";
import InvestPage from "./pages/InvestPage";
import JointVenturesPage from "./pages/JointVenturesPage";
import ProductsPage from "./pages/ProductsPage";
import SubmitDealPage from "./pages/SubmitDealPage";
import AuthPage from "./pages/AuthPage";
import InvestorDashboard from "./pages/InvestorDashboard";
import ClientPortal from "./components/ClientPortal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#07111f] text-slate-100">
      {/* Header / Global Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-300/40 bg-sky-300/10">
              <Building2 className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white">
                BUICK CITY
              </p>
              <p className="text-[10px] tracking-[0.28em] text-sky-300">
                FINANCIAL CORPORATION
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/">
              Home
            </Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/products">
              Products
            </Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/joint-ventures">
              Joint Ventures
            </Link>
            <Link className="text-sm text-slate-300 transition hover:text-white" to="/invest">
              Invest
            </Link>
            <Link className="text-sm font-semibold text-sky-300 transition hover:text-white" to="/portal">
              Client Portal
            </Link>
            <Link
              to="/submit-deal"
              className="rounded-full bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              Submit Project
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
            <Link to="/" onClick={closeMenu} className="text-slate-200">
              Home
            </Link>
            <Link to="/products" onClick={closeMenu} className="text-slate-200">
              Products
            </Link>
            <Link to="/joint-ventures" onClick={closeMenu} className="text-slate-200">
              Joint Ventures
            </Link>
            <Link to="/invest" onClick={closeMenu} className="text-slate-200">
              Invest
            </Link>
            <Link to="/portal" onClick={closeMenu} className="font-semibold text-sky-300">
              Client Portal
            </Link>
            <Link
              to="/submit-deal"
              onClick={closeMenu}
              className="rounded-full bg-sky-300 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Submit Project
            </Link>
          </nav>
        )}
      </header>

      {/* Dynamic View Rendering */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/joint-ventures" element={<JointVenturesPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/submit-deal" element={<SubmitDealPage />} />
          <Route path="/portal" element={<ClientPortal />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Buick City Financial Corporation. All rights reserved.</p>
          <p>
            Private Commercial B2B Lending Exclusively for Business Entities • Commercial Purpose Only • By Inquiry Only
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;