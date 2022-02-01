import { Center, VStack, Text, Button, chakra } from "@chakra-ui/react";
import logo from "../img/logo.png";

const Home: React.FC = () => {
  return (
    <Center height="100vh">
      <VStack spacing="1.5rem">
        <chakra.img alt="logo" src={logo} width="60%" marginBottom="1rem" />
        <Text textAlign="center" color="gray.800" fontWeight="600">
          Some fascinating introductory text about the PhlexEtrack app.
        </Text>
        <Button background="primary" color="white">
          Help Me
        </Button>
        <Text textAlign="center" color="gray.800" fontWeight="600">
          Click on the Scan Document tab below to scan a document barcode.
        </Text>
      </VStack>
    </Center>
  );
};

export { Home };
