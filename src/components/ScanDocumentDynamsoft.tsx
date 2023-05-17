import { useEffect, useRef } from "react";
import { Center, Box, useToast } from "@chakra-ui/react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";

BarcodeScanner.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.20/dist/";

BarcodeScanner.license = process.env.REACT_APP_DYNAMSOFT_KEY as string;
      
type ScanResults = {
  barcodeText: string
}[];

interface ScanDocumentDynamsoftProps {
  setScans: any
}

const ScanDocumentDynamsoft: React.FC<ScanDocumentDynamsoftProps> = ({ setScans }:ScanDocumentDynamsoftProps) => {
  const scanningAppRef = useRef();
  const toast = useToast();

  useEffect(() => {
    let scanner: any;
    const handleScan = (result: any) => {
        const { barcodeText } = result;
        if (barcodeText?.indexOf("Attention(exceptionCode") === -1) {
          setScans((prevScans: string[]) => [ ...prevScans, barcodeText ]);
        }
        toast({
          title: 'Document Scanned',
          description: barcodeText,
          status: 'success',
          duration: 1500,
          isClosable: false,
          position: "top"
        })
    };
    (async () => {
      try {
        scanner = await BarcodeScanner.createInstance();
        const scannerWrapper: any = scanningAppRef.current;

        scanner.onUniqueRead = (text:any, result:any) => {
          handleScan(result)
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
  }, [setScans, toast]);

  return (
    <>
      <Center height="100vh" paddingBottom="3rem" background="#000" zIndex="0">
        {/* @ts-ignore */}
        <Box height="50vh" width="100vw" ref={scanningAppRef} />
      </Center>
    </>
  );
};

export { ScanDocumentDynamsoft };
