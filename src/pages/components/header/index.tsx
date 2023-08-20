import styled from "styled-components";
import { useRouter } from "next/router";
import { Image, Flex, Spacer, Heading, useMediaQuery } from "@chakra-ui/react";

import HamburgerButton from "./HamburgerButton";
import { Nav } from "./Nav";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 32px;
  background: #fff;
  opacity: 0.75;
  z-index: 1000;
  border-bottom: 1px solid lightgray;
`;

export const headerList = [
  "Home",
  "Profile",
  "Self-Introduce",
  "PortFolio",
  "Contact",
];

export const Header = () => {
  const router = useRouter();
  const [isBelowBreakPoint] = useMediaQuery("(max-width: 600px)");

  const handleReload = () => {
    router.push(router.pathname);
  };

  return (
    <FixedHeader>
      <Flex w="100%" justifyContent="center">
        <Flex px="2" w="100%" maxW="1200px" alignItems="center">
          <Heading size="xl" onClick={handleReload} cursor="pointer">
            <Image
              src="khs_logo.png"
              boxSize="60px"
              objectFit="contain"
              maxWidth="100%"
            />
          </Heading>
          <Spacer />
          <Nav isPoint={isBelowBreakPoint} />
          {isBelowBreakPoint && <HamburgerButton />}
        </Flex>
      </Flex>
    </FixedHeader>
  );
};
