import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ScanDocument } from "./components/ScanDocument";
import { ScanResult } from "./components/ScanResult";
import { Header } from "./components/Header";
import { ScanDrawer } from "./components/ScanDrawer";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "blue.400",
    },
  },
});

const App: React.FC = () => {
  const [ scans, setScans ] = useState<string[]>([]);
  const [ drawerOpen, setDrawerOpen ] = useState<boolean>(false);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Header scanCount={scans.length} setDrawerOpen={setDrawerOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan-document" element={<ScanDocument setScans={setScans} />} />
          <Route path="/scan-result" element={<ScanResult />} />
        </Routes>
        <ScanDrawer isOpen={drawerOpen} setDrawerOpen={setDrawerOpen} scans={scans} setScans={setScans} />
        <NavBar setScans={setScans} />
      </ChakraProvider>
    </Router>
  );
}
export { App };
