import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
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
    setDocumentScanned(true);

    setTimeout(() => {
      navigate(`/scan-result?result=${scanResult.barcodes[0].data}`);
    }, 1000);
  };

  return (
    <>
      <CentreDiv background="transparent" zIndex="100">
        <Box
          border={`4px dashed ${documentScanned ? "#48BB78" : "white"}`}
          borderRadius="1rem"
          width="75vw"
          height="25vh"
        />
      </CentreDiv>
      <CentreDiv background="#000" zIndex="0">
        <ScanditBarcodeScanner
          licenseKey={licenseKey}
          engineLocation="js"
          onReady={() => console.log("READY")}
          onScan={handleScan}
          onScanError={(error: any) => setError(error)}
          scanSettings={scanSettings}
        />
      </CentreDiv>
    </>
  );
};

const CentreDiv = styled.div<{ background: string; zIndex: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  background: ${({ background }) => background};
  z-index: ${({ zIndex }) => zIndex};
  position: fixed;
`;

export { ScanDocument };
