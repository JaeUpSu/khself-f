import React from "react";
import { Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  to: string;
  label: string;
}

const ScrollLink = ({ to, label }: Props) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const section = document.getElementById(to);
    if (section) {
      const offset = section.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <ChakraLink
      h="100%"
      display="flex"
      cursor="pointer"
      fontWeight="bold"
      color="rgb(80, 80, 80)"
      onClick={scrollToSection}
      border="1px solid gray"
      alignItems="center"
      justifyContent="center"
      _hover={{
        backgroundColor: "rgb(200, 200, 200)",
      }}
    >
      {label}
    </ChakraLink>
  );
};

export default ScrollLink;
