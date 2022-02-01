import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ScanDocument } from "./components/ScanDocument";
import { ScanResult } from "./components/ScanResult";

const App: React.FC = () => (
  <Router>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-document" element={<ScanDocument />} />
        <Route path="/scan-result" element={<ScanResult />} />
      </Routes>
      <NavBar />
    </ChakraProvider>
  </Router>
);

export { App };
