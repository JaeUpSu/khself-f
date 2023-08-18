import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

interface Props {
  to: string;
  label: string;
}

const ScrollLink = ({ to, label }: Props) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (to === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(to);
      if (section) {
        const offset = section.offsetTop - 30;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
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
      onClick={scrollToSection}
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
