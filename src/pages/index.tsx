import { Image, VStack } from "@chakra-ui/react";

import { Header } from "./components/header";
import { Profile } from "./components/profile";

interface ISection {
  name: string;
  component: React.ReactElement;
}
const sections: ISection[] = [
  { name: "Profile", component: <Profile /> },
  { name: "Description", component: <Profile /> },
  { name: "PortFolio", component: <Profile /> },
  { name: "Contact", component: <Profile /> },
];

export default function Home(): React.ReactElement {
  return (
    <main>
      <VStack w="100%" px="32px" pb="10" backgroundColor="blackAlpha.200">
        <VStack pt="10px" mb="70px" w="100%" maxW="1200px">
          <Header />
          <Image mt="130px" w="400px" h="340px" src="khs_image2.png" />
          {sections.map((section: ISection) => (
            <section
              key={section.name}
              id={section.name}
              style={{
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              {section.component}
            </section>
          ))}
        </VStack>
      </VStack>
    </main>
  );
}
