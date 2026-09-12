import { FileText } from "lucide-react";
import DealWizard from "../components/DealWizard";

function SubmitDealPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sky-300 mb-3">
            <FileText className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Intake & Underwriting
            </span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Submit Your Deal Specs
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Provide your project address, financial requirements, and contact information to begin an initial underwriting evaluation.
          </p>
        </div>
        <DealWizard />
      </div>
    </div>
  );
}

export default SubmitDealPage;