import { useState } from "react";
import { CenterDiv } from "./styled-components";
// @ts-ignore
import ScanditBarcodeScanner from "scandit-sdk-react";
import { Barcode, ScanSettings, BarcodePicker } from "scandit-sdk";
import { useToast } from "@chakra-ui/react";

interface ScanDocumentProps {
  setScans: any;
}

const ScanDocument: React.FC<ScanDocumentProps> = ({ setScans }: ScanDocumentProps) => {
  const [, setError] = useState();
  const toast = useToast();

  const licenseKey = process.env.REACT_APP_SCANDIT_KEY;

  const scanSettings = new ScanSettings({
    enabledSymbologies: [
      Barcode.Symbology.CODE39,
      Barcode.Symbology.CODE128,
      Barcode.Symbology.AZTEC,
      Barcode.Symbology.CODABAR,
      Barcode.Symbology.CODE11,
      Barcode.Symbology.CODE128,
      Barcode.Symbology.CODE25,
      Barcode.Symbology.CODE32,
      Barcode.Symbology.CODE39,
      Barcode.Symbology.CODE93,
      Barcode.Symbology.DATA_MATRIX,
      Barcode.Symbology.EAN13,
      Barcode.Symbology.EAN8,
      Barcode.Symbology.GS1_DATABAR,
      Barcode.Symbology.GS1_DATABAR_EXPANDED,
      Barcode.Symbology.GS1_DATABAR_LIMITED,
      Barcode.Symbology.IATA_2_OF_5,
      Barcode.Symbology.INTERLEAVED_2_OF_5,
      Barcode.Symbology.KIX,
      Barcode.Symbology.LAPA4SC,
      Barcode.Symbology.MATRIX_2_OF_5,
      Barcode.Symbology.MAXICODE,
      Barcode.Symbology.MICRO_PDF417,
      Barcode.Symbology.MSI_PLESSEY,
      Barcode.Symbology.PDF417,
      Barcode.Symbology.RM4SCC,
      Barcode.Symbology.UPCA,
      Barcode.Symbology.UPCE,
      Barcode.Symbology.USPS_INTELLIGENT_MAIL
    ],
    codeDuplicateFilter: 1000, // Minimum delay between duplicate results
  });

  const handleScan = (scanResult: any) => {
    const barcode = scanResult.barcodes[0].data;
    setScans((prevScans: string[]) => [ ...prevScans, barcode ]);
    toast({
      title: 'Document Scanned',
      description: barcode,
      status: 'success',
      duration: 1500,
      isClosable: false,
      position: "top"
    })
  };

  return (
    <CenterDiv background="#000" zIndex="0" id="scandit-scanner">
      <ScanditBarcodeScanner
        licenseKey={licenseKey}
        engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build"
        onScan={handleScan}
        onScanError={(error: any) => setError(error)}
        scanSettings={scanSettings}
        enableTorchToggle={false}
        enableCameraSwitcher={false}
        laserArea={{ x: 0, y: 0.25, width: 1, height: 0.5 }}
        videoFit={BarcodePicker.ObjectFit.CONTAIN}
      />
    </CenterDiv>
  );
};

export { ScanDocument };
