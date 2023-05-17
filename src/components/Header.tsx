import { Box, Text } from "@chakra-ui/react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  scanCount: number;
  setDrawerOpen: any
}

const Header: React.FC<HeaderProps> = ({ scanCount, setDrawerOpen }: HeaderProps) => {

    return (
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
        background="primary"
        zIndex="999"
      >
        <Text as="span" color="#fff" fontWeight="600" fontSize="1.1rem">
          [App name] Barcode Scanner
        </Text>
        <Box 
          position="fixed" 
          top="0" 
          right="1rem" 
          display="flex" 
          alignItems="center" 
          zIndex="1000" 
          height="3.5rem" 
          color="#fff" 
          cursor="pointer" 
          onClick={() => setDrawerOpen(true)}
          >
            <Text marginRight="0.5rem" fontWeight="5  00">{scanCount > 0 ? scanCount : ''}</Text>
            <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
        </Box>
      </Box>
    )
  };

export { Header };
