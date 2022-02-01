import { useLocation } from "react-router-dom";

const ScanResult: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  return <div>Barcode: {searchParams.get("result")}</div>;
};

export { ScanResult };
