import styled from "styled-components";
import { useRouter } from "next/router";
import {
  Image,
  Flex,
  Spacer,
  Heading,
  List,
  ListItem,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";

import ScrollLink from "./ScrollLink";
import HamburgerButton from "./HamburgerButton";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 32px;
  background: #fff;
  opacity: 0.8;
  z-index: 1000;
  border-bottom: 1px solid lightgray;
`;

export const Header = () => {
  const router = useRouter();

  const [isBelowBreakPoint] = useMediaQuery("(max-width: 600px)");

  const headerList = [
    "Home",
    "Profile",
    "Self-Introduce",
    "PortFolio",
    "Contact",
  ];
  const headerGapValues = useBreakpointValue({ base: 3, md: 8 });

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
          <nav style={{ display: isBelowBreakPoint ? "none" : "block" }}>
            <List
              display="flex"
              flexDirection="row"
              alignItems="center"
              listStyleType="none"
              gap={headerGapValues}
            >
              {headerList.map((label: string, index: number) => (
                <ListItem key={index}>
                  <ScrollLink to={label} label={label} />
                </ListItem>
              ))}
            </List>
          </nav>
          {isBelowBreakPoint && <HamburgerButton />}
        </Flex>
      </Flex>
    </FixedHeader>
  );
};
