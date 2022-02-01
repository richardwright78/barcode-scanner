import { Box, Text } from "@chakra-ui/react";

const Header: React.FC = () => (
  <Box
    as="header"
    display="flex"
    position="fixed"
    top="0"
    width="100%"
    height="3.5rem"
    padding="0.5rem"
    alignItems="center"
    justifyContent="center"
    boxShadow="0 1px 5px 0 rgba(0,0,0,0.1)"
    background="#4299E1"
  >
    <Text as="span" color="#fff" fontWeight="600" fontSize="1.1rem">
      PhlexEtrack Barcode Scanner
    </Text>
  </Box>
);

export { Header };
