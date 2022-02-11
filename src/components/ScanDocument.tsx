import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box } from "@chakra-ui/react";
import ScanningApp from "react-qr-barcode-scanner";

const ScanDocument: React.FC = () => {
  const [, setError] = useState();
  const [documentScanned, setDocumentScanned] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleScan = (error: any, result: any) => {
    if (error) setError(error);
    if (result) {
      setDocumentScanned(true);
      setTimeout(() => {
        navigate(`/scan-result?result=${result.text}`);
      }, 500);
    }
  };

  return (
    <>
      <Center
        height="100vh"
        width="100%"
        paddingBottom="3rem"
        background="transparent"
        zIndex="100"
        position="fixed"
      >
        <Box
          border={`4px dashed ${documentScanned ? "#48BB78" : "white"}`}
          borderRadius="1rem"
          width="75vw"
          height="25vh"
        />
      </Center>
      <Center height="100vh" paddingBottom="3rem" background="#000" zIndex="0">
        <ScanningApp
          onUpdate={handleScan}
          torch={true}
          height="35%"
          width="100%"
        />
      </Center>
    </>
  );
};

export { ScanDocument };
