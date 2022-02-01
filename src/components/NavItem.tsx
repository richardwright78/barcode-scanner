import { useNavigate } from "react-router-dom";
import { VStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavItemProps = {
  text: string;
  path: string;
  icon: any;
  margin?: string;
};

const NavItem: React.FC<NavItemProps> = ({ path, icon, text, margin }) => {
  const navigate = useNavigate();
  return (
    <VStack onClick={() => navigate(path)} marginRight={margin}>
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
