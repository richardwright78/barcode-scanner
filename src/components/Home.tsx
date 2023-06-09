import { Center, VStack, Text, Button, chakra } from "@chakra-ui/react";
import logo from "../img/logo.png";

const Home: React.FC = () => {
  return (
    <Center height="100vh">
      <VStack spacing="1.5rem">
        <Text
          textAlign="center"
          color="gray.800"
          fontSize="2rem"
          fontWeight="600"
          padding="0 2rem"
          marginBottom="1rem"
        >
          [App Logo]
        </Text>
        {/* <chakra.img alt="logo" src={logo} width="60%" marginBottom="1rem" /> */}
        <Text
          textAlign="center"
          color="gray.800"
          fontWeight="600"
          padding="0 2rem"
        >
          Some fascinating introductory text about the [App name] app.
        </Text>
        <Button background="primary" color="white">
          Help Me
        </Button>
        <Text
          textAlign="center"
          color="gray.800"
          fontWeight="600"
          padding="0 2rem"
        >
          Click on the Scan Document tab below to scan a document barcode.
        </Text>
      </VStack>
    </Center>
  );
};

export { Home };
