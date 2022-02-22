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

  const licenseKey =
    "AXlhdAW1JMTrESs17z800ZoOakxsK4wIiD/2ZANEOC0xSV0uzXMEllVhIisZfep6sneH/dJENNFVH6VglxK27CNqtfoPWEhcjSh0xCtlMTL/Ln9mwg1yzyYdxhv6ONpjaa5nRbOYgDM03km/wY5kt/xeZYk9dU7TX1+44SSSRMs+uF2B66UlDjw/vqf2io4UQdHejf8FFCygbs0AfijI87+JRyxwdYpdSz3BWXH1ww+bSiRV79UiaTzKBCsxlCmEq6VNa/kCDuA1DYSlMBY3GlRH6rUom2GcA3qAm5oAIzQEgEHI1sMoRDz8+WoD15zYQfxxVYl7b06kpqkXEC69MicGbIRYhtcqplrJBdI/4SueiwsZglvEloZmFqNf5lsEJzNMllOqzoU2daVOdP9L7XkdYC9CEPgIYZ8c5G52Bd97s0UYKPIWgUhYAK1XOdFPKFBG4YtJbvHtW+bU8APO5QuraXSg5jSyuC6eHK87sK3ppRX8lzuLOpO5E5I7m4VAXhIPZr+JBeCw18NILV9DRJeqQf5Cg9gTcyNX00yFNZuz52yQ/MyjqLcW4TCu3BPoUKpH2gsYxMqhf+xbj2rPnJjk9epffQv8WMn3c93b84xjdb5IBkKKe8Nx1uKKnbGxt4oFyPN8OpDjjfRcmC2zwB3TVkmcfdA6s5q1EFxOuBznprZTJOivtUcusPf1gfPdAInVvZiwsPmN6k9TNbQ95289COI9DN0ZqmDOpzL78P+LQIRSu726l57sozxbfcFQQxJIb89i1MQUxyoSXcuLgKJ6vPY0hchOukmpN3Wkig==";

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
