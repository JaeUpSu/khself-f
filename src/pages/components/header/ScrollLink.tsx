import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { scrollToSection } from "@/pages/lib/scrollToSection";

interface Props {
  to: string;
  label: string;
}

const ScrollLink = ({ to, label }: Props) => {
  const onEvent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    scrollToSection(to);
  };

  return (
    <ChakraLink
      py="2"
      px="3"
      h="100%"
      display="flex"
      cursor="pointer"
      fontWeight="bold"
      color="rgb(20, 20, 20)"
      onClick={onEvent}
      alignItems="center"
      justifyContent="center"
      _hover={{
        borderRadius: 10,
        backgroundColor: "rgb(225, 225, 225)",
      }}
    >
      {label}
    </ChakraLink>
  );
};

export default ScrollLink;
