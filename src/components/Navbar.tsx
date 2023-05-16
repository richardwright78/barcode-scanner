import React from "react";
import { faHome, faBarcode } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

interface NavBarProps {
  setScans: any
}

const NavBar: React.FC<NavBarProps> = ({ setScans }: NavBarProps) => {
  return(
    <Box
      as="nav"
      display="flex"
      position="fixed"
      bottom="0"
      width="100%"
      padding="0.5rem"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 -1px 5px 0 rgba(0,0,0,0.1)"
      background="white"
      zIndex="200"
    >
      <NavItem text="[App name]" path="/" icon={faHome} margin="2rem" setScans={setScans} />
      <NavItem text="Scan Document" path="/scan-document" icon={faBarcode} />
    </Box>
  )
};

export { NavBar };
