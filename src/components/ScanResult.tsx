import { useLocation } from "react-router-dom";
import { Text, VStack } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterDiv } from "./styled-components";

const ScanResult: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  return (
    <CenterDiv background="transparent" zIndex="0">
      <VStack spacing="2rem">
        <FontAwesomeIcon icon={faCheckCircle} color="#68D391" size="6x" />
        <Text fontSize="1.5rem" fontWeight="700">
          Document Scanned
        </Text>
        <VStack background="gray.100" padding="1rem" borderRadius="0.5rem">
          <Text fontWeight="600" color="gray.700">
            Barcode
          </Text>
          <Text fontWeight="gray.500" color="gray.700" letterSpacing=".2rem">
            {searchParams.get("result")}
          </Text>
        </VStack>
      </VStack>
    </CenterDiv>
  );
};

export { ScanResult };
