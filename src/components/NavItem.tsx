import { useNavigate } from "react-router-dom";
import { VStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavItemProps = {
  text: string;
  path: string;
  icon: any;
  margin?: string;
  setScans?: any
};

const NavItem: React.FC<NavItemProps> = ({ path, icon, text, margin, setScans }) => {
  const navigate = useNavigate();

  const navOnclick = () => {
    navigate(path);
    if (setScans) {
      setScans([]);
    }
  }
  return (
    <VStack onClick={navOnclick} marginRight={margin}>
      <FontAwesomeIcon icon={icon} color="#4299E1" size="lg" />
      <Text
        style={{ marginTop: "0px" }}
        fontSize="sm"
        color="#4299E1"
        as="span"
      >
        {text}
      </Text>
    </VStack>
  );
};

export { NavItem };
