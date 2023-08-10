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
    const section = document.getElementById(to);
    if (section) {
      const offset = section.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <ChakraLink onClick={scrollToSection} cursor="pointer">
      {label}
    </ChakraLink>
  );
};

export default ScrollLink;
