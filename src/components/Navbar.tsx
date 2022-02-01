import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBarcode } from "@fortawesome/free-solid-svg-icons";
import { Box, VStack, Text } from "@chakra-ui/react";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      position="fixed"
      bottom="0"
      width="100%"
      padding="0.5rem"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 -1px 5px 0 rgba(0,0,0,0.1)"
      background="white"
    >
      <VStack onClick={() => navigate("/")} marginRight="2rem">
        <FontAwesomeIcon icon={faHome} color="#4299E1" size="lg" />
        <Text style={{ marginTop: "0px" }} fontSize="sm" color="#4299E1">
          Home
        </Text>
      </VStack>
      <VStack onClick={() => navigate("/scan-document")}>
        <FontAwesomeIcon icon={faBarcode} color="#4299E1" size="lg" />
        <Text style={{ marginTop: "0px" }} fontSize="sm" color="#4299E1">
          Scan Document
        </Text>
      </VStack>
    </Box>
  );
};

export { NavBar };
