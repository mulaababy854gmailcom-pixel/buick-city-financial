import { useNavigate } from "react-router-dom";
import LoanProducts from "../components/LoanProducts";

function ProductsPage({ onApplyForProduct }) {
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
      <LoanProducts onApplyForProduct={handleProductApplication} />
    </div>
  );
}

export default ProductsPage;