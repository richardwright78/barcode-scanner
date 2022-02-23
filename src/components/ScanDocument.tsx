import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box } from "@chakra-ui/react";
import ScanningApp from "dynamsoft-javascript-barcode";

ScanningApp.BarcodeReader.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.7/dist/";

type ScanResults = {
  barcodeText: string;
}[];

const ScanDocument: React.FC = () => {
  const [, setError] = useState();
  const [documentScanned, setDocumentScanned] = useState<boolean>(false);
  const navigate = useNavigate();

  const scanningAppRef = useRef();

  useEffect(() => {
    let scanner: any;
    (async () => {
      try {
        scanner = await ScanningApp.BarcodeScanner.createInstance();
        const scannerWrapper: any = scanningAppRef.current;

        scanner.onFrameRead = (results: ScanResults) => handleScan(results);

        if (scannerWrapper) scannerWrapper.appendChild(scanner.getUIElement());

        await scanner.open();
      } catch (ex) {
        console.error(ex);
      }
    })();

    return () => {
      (async () => {
        if (scanner) await scanner.destroy();
      })();
    };
  }, []);

  const handleScan = (results: ScanResults) => {
    for (let result of results) {
      const { barcodeText } = result;
      if (barcodeText?.indexOf("Attention(exceptionCode") === -1) {
        navigate(`/scan-result?result=${barcodeText}`);
      }
    }
  };

  return (
    <>
      <Center height="100vh" paddingBottom="3rem" background="#000" zIndex="0">
        {/* @ts-ignore */}
        <Box height="50vh" width="100vw" ref={scanningAppRef} />
      </Center>
    </>
  );
};

export { ScanDocument };
