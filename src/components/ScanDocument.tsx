import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CenterDiv } from "./styled-components";
// @ts-ignore
import ScanditBarcodeScanner from "scandit-sdk-react";
import { Barcode, ScanSettings } from "scandit-sdk";

const ScanDocument: React.FC = () => {
  const [, setError] = useState();
  const navigate = useNavigate();

  const licenseKey = process.env.REACT_APP_SCANDIT_KEY;

  const scanSettings = new ScanSettings({
    enabledSymbologies: [Barcode.Symbology.CODE39],
    codeDuplicateFilter: 1000, // Minimum delay between duplicate results
  });

  const handleScan = (scanResult: any) => {
    setTimeout(() => {
      navigate(`/scan-result?result=${scanResult.barcodes[0].data}`);
    }, 1000);
  };

  return (
    <CenterDiv background="#000" zIndex="0" id="scandit-scanner">
      <ScanditBarcodeScanner
        licenseKey={licenseKey}
        engineLocation="js"
        onReady={() => console.log("READY")}
        onScan={handleScan}
        onScanError={(error: any) => setError(error)}
        scanSettings={scanSettings}
        enableTorchToggle={false}
        enableCameraSwitcher={false}
      />
    </CenterDiv>
  );
};

export { ScanDocument };
