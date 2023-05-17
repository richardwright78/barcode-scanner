import { useEffect, useRef, useState } from "react";
import { Center, Box, useToast, Text } from "@chakra-ui/react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";

BarcodeScanner.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.20/dist/";

BarcodeScanner.license = process.env.REACT_APP_DYNAMSOFT_KEY as string;
      
type ScanResult = {
  barcodeText: string
};

interface ScanDocumentDynamsoftProps {
  setScans: any
}

const ScanDocumentDynamsoft: React.FC<ScanDocumentDynamsoftProps> = ({ setScans }:ScanDocumentDynamsoftProps) => {
  const scanningAppRef = useRef();
  const scanningTextRef = useRef({ current: { innerHTML: '' } });
  const toast = useToast();
  const [ scanningEnabled, setScanningEnabled ] = useState(false);
  const [ scanerInstance, setScanerInstance ] = useState(null);

  useEffect(() => {
    let scanner: any;
    const handleScan = (result: ScanResult) => {
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
        if (!scanerInstance) {
          scanner = await BarcodeScanner.createInstance();
          setScanerInstance(scanner)
          const scannerWrapper: any = scanningAppRef.current;
  
          scanner.onUniqueRead = (text:any, result:any) => {
            /* @ts-ignore */
            if (scanningTextRef.current.innerHTML.includes("Scanning")) {
              handleScan(result);
              setScanningEnabled(false);
            }
          };
  
          if (scannerWrapper) scannerWrapper.appendChild(scanner.getUIElement());
  
          if(!scanner.destroy) {
            await scanner.open();
          }
        }
      } catch (ex) {
        console.error(ex);
      }
    })();

    return () => {
      (async () => {
        if (scanner?.destroy) await scanner.destroy();
      })();
    };
  }, [setScans, toast, scanningEnabled, scanerInstance]);

  return (
    <>
      <Center height="100vh" paddingBottom="3rem" background="#000" zIndex="0" onClick={() => setScanningEnabled(true)}>
        {/* @ts-ignore */}
      <Text as="div" color={scanningEnabled ? '#68D391' : '#fff'} position="fixed" top="5rem" textAlign="center" ref={scanningTextRef}>
        {scanningEnabled ? 'Scanning' : 'Tap anywhere to enable scanning'}
      </Text>
        {/* @ts-ignore */}
        <Box height="50vh" width="100vw" ref={scanningAppRef} />
      </Center>
    </>
  );
};

export { ScanDocumentDynamsoft };
