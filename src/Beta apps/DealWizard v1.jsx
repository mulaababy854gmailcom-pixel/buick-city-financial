import React, { useState } from 'react';

const INITIAL_DATA = {
  // Step 1: Property & Deal Overview
  propertyName: '',
  propertyType: 'Multifamily',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  
  // Step 2: Financial Request
  requestedAmount: '',
  estimatedValue: '',
  purchasePrice: '',
  loanType: 'Bridge',
  targetClosingDate: '',

  // Step 3: Contact Info & Uploads
  applicantName: '',
  companyName: '',
  email: '',
  phone: '',
  notes: ''
};

export default function DealWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update input state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step Navigation
  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Deal Request:', formData);
    // TODO: Send formData to your backend API, Supabase, or email service
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-slate-900 border border-slate-800 rounded-xl text-center text-white">
        <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-2xl font-semibold mb-2">Deal Submitted Successfully</h2>
        <p className="text-slate-400 mb-6">
          Thank you, {formData.applicantName}. Our underwriting team will review your project details for {formData.propertyName || 'your property'} and reach out shortly.
        </p>
        <button
          onClick={() => {
            setFormData(INITIAL_DATA);
            setCurrentStep(1);
            setIsSubmitted(false);
          }}
          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-lg transition"
        >
          Submit Another Deal
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-xl text-white shadow-xl">
      {/* Progress Bar Header */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-slate-400 font-medium mb-2">
          <span className={currentStep >= 1 ? 'text-blue-400' : ''}>1. PROPERTY DETAILS</span>
          <span className={currentStep >= 2 ? 'text-blue-400' : ''}>2. CAPITAL REQUEST</span>
          <span className={currentStep >= 3 ? 'text-blue-400' : ''}>3. APPLICANT INFO</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={currentStep === 3 ? handleSubmit : handleNext}>
        {/* STEP 1: Property Info */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Property & Asset Details</h3>
            
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Project / Property Name</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                placeholder="e.g. Oakridge Commercial Center"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Asset Class</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Multifamily">Multifamily</option>
                  <option value="Commercial / Retail">Commercial / Retail</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Mixed-Use">Mixed-Use</option>
                  <option value="Development / Land">Development / Land</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="123 Main St"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Capital Request */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Capital Structure & Terms</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Requested Capital ($)</label>
                <input
                  type="number"
                  name="requestedAmount"
                  value={formData.requestedAmount}
                  onChange={handleChange}
                  placeholder="e.g. 1500000"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Capital Solution Type</label>
                <select
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Bridge Loan">Bridge Loan</option>
                  <option value="Term Loan / Permanent">Term Loan / Permanent</option>
                  <option value="Construction Debt">Construction Debt</option>
                  <option value="Structured Mezzanine">Structured Mezzanine</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Estimated Property Value ($)</label>
                <input
                  type="number"
                  name="estimatedValue"
                  value={formData.estimatedValue}
                  onChange={handleChange}
                  placeholder="e.g. 2200000"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Target Closing Date</label>
                <input
                  type="date"
                  name="targetClosingDate"
                  value={formData.targetClosingDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Applicant Contact Info */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Sponsor & Contact Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Company / Entity Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Additional Notes or Project Overview</label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Briefly describe the business plan or use of funds..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between items-center">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition"
            >
              Back
            </button>
          ) : <div />}

          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition shadow-lg shadow-blue-600/30"
          >
            {currentStep === 3 ? 'Submit Deal Overview' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  );
}