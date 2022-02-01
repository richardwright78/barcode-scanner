import { useNavigate } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import ScanningApp from "react-qr-barcode-scanner";

const ScanDocument: React.FC = () => {
  const navigate = useNavigate();

  const handleScan = (error: any, result: any) => {
    if (result) {
      navigate(`/scan-result?result=${result.text}`);
    }
  };

  return (
    <Center height="100vh" paddingBottom="3rem" background="#000">
      <ScanningApp onUpdate={handleScan} />
    </Center>
  );
};

export { ScanDocument };
