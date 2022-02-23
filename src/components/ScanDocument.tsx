import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box } from "@chakra-ui/react";
import ScanningApp from "dynamsoft-javascript-barcode";

ScanningApp.BarcodeReader.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.7/dist/";

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

        scanner.onFrameRead = (results: any) => {
          for (let result of results) {
            if (result.barcodeText.indexOf("Attention(exceptionCode") === -1) {
              console.log("RESULT>>>>> ", result);
            }
          }
        };

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
      <Center height="100vh" paddingBottom="3rem" background="#000" zIndex="0">
        {/* @ts-ignore */}
        <Box height="50vh" width="100%" ref={scanningAppRef} />
      </Center>
    </>
  );
};

export { ScanDocument };
