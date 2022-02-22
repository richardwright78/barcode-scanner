import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box } from "@chakra-ui/react";
// @ts-ignore
import ScanditBarcodeScanner from "scandit-sdk-react";
import { Barcode, ScanSettings } from "scandit-sdk";

const ScanDocument: React.FC = () => {
  const [, setError] = useState();
  const [documentScanned, setDocumentScanned] = useState<boolean>(false);
  const navigate = useNavigate();

  const licenseKey = process.env.REACT_APP_SCANDIT_KEY;

  const scanSettings = new ScanSettings({
    enabledSymbologies: [Barcode.Symbology.CODE39],
    codeDuplicateFilter: 1000, // Minimum delay between duplicate results
  });

  const handleScan = (scanResult: any) => {
    navigate(`/scan-result?result=${scanResult.barcodes[0].data}`);
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
        <ScanditBarcodeScanner
          licenseKey={licenseKey}
          engineLocation="js"
          onReady={() => console.log("READY")}
          onScan={handleScan}
          onScanError={(error: any) => console.log("ERROR>>> ", error)}
          scanSettings={scanSettings}
        />
      </Center>
    </>
  );
};

export { ScanDocument };
