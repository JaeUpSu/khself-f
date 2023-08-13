import React from "react";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import ScrollLink from "../ScrollLink";

function HamburgerButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const smIconSize = 30;

  return (
    <>
      <RxHamburgerMenu
        ref={btnRef}
        onClick={onOpen}
        style={{
          width: `${smIconSize}px`,
          height: `${smIconSize}px`,
          cursor: "pointer",
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>KHS-ELF</DrawerHeader>
          <DrawerBody>
            <nav>
              <List
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                listStyleType="none"
                gap={3}
                mt={10}
              >
                <ListItem key={1} w="100%" h="60px" onClick={onClose}>
                  <ScrollLink to="Profile" label="Profile" />
                </ListItem>
                <ListItem key={2} w="100%" h="60px" onClick={onClose}>
                  <ScrollLink to="Description" label="Description" />
                </ListItem>
                <ListItem key={3} w="100%" h="60px" onClick={onClose}>
                  <ScrollLink to="PortFolio" label="PortFolio" />
                </ListItem>
                <ListItem key={4} w="100%" h="60px" onClick={onClose}>
                  <ScrollLink to="Contact" label="Contact" />
                </ListItem>
              </List>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerButton;
