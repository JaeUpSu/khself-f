import React from "react";
import { Image, VStack } from "@chakra-ui/react";

import { Header } from "./components/header";
import { Sections } from "./components/Sections";

export default function Home(): React.ReactElement {
  return (
    <main>
      <VStack
        w="100%"
        px="32px"
        pb="10"
        justifyContent="center"
        backgroundColor="blackAlpha.50"
      >
        <VStack pt="10px" mb="100px" w="100%" maxW="1200px">
          <Header />
          <Sections />
        </VStack>
      </VStack>
    </main>
  );
}
