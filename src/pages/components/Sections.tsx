import { VStack } from "@chakra-ui/react";
import { Profile } from "./profile";
import { motion } from "framer-motion";
import { Description } from "./description";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";

interface ISection {
  name: string;
  component: React.ReactElement;
}

export const sections: ISection[] = [
  { name: "Profile", component: <Profile /> },
  { name: "Self-Introduce", component: <Description /> },
  { name: "PortFolio", component: <Portfolio /> },
  { name: "Contact", component: <Contact /> },
];

export const Sections = () => {
  return (
    <VStack w="100%" justifyContent="center">
      {sections.map((section: ISection) => (
        <section
          id={section.name}
          key={section.name}
          style={{
            width: "90%",
            backgroundColor: "transparent",
          }}
        >
          {section.component}
        </section>
      ))}
    </VStack>
  );
};
