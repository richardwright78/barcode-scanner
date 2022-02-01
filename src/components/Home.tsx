import { Center, VStack } from "@chakra-ui/react";
import logo from "../img/logo.png";

const Home: React.FC = () => {
  return (
    <Center height="100vh">
      <VStack>
        <img alt="logo" src={logo} width="50%" />
      </VStack>
    </Center>
  );
};

export { Home };
