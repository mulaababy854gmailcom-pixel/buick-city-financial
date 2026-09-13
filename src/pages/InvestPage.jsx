import { useNavigate } from "react-router-dom";
import Invest from "../components/Invest";

function InvestPage({ onApplyForProduct }) {
  const navigate = useNavigate();

  const handleProductApplication = (productPayload) => {
    if (onApplyForProduct) {
      onApplyForProduct(productPayload, navigate);
    } else {
      navigate('/investor-dashboard');
    }
  };

  return (
    <div className="py-12">
      <Invest onApplyForProduct={handleProductApplication} />
    </div>
  );
}

export default InvestPage;