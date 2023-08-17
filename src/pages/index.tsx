import { Image, VStack } from "@chakra-ui/react";

import { Header } from "./components/header";
import { Sections } from "./components/Sections";

export default function Home(): React.ReactElement {
  return (
    <main>
      <VStack w="100%" px="32px" pb="10" backgroundColor="blackAlpha.100">
        <VStack pt="10px" mb="70px" w="100%" maxW="1200px">
          <Header />
          <Image mt="130px" w="400px" h="340px" src="khs_image2.png" />
          <Sections />
        </VStack>
      </VStack>
    </main>
  );
}
