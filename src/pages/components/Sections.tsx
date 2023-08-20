import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { headerList } from "./header";
import { Profile } from "./profile";
import { Description } from "./description";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";
import { scrollToSection } from "../lib/scrollToSection";
import { activeSectionState } from "../services/atoms";
import { useRecoilValue } from "recoil";

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
  const activeSection = useRecoilValue(activeSectionState);

  useEffect(() => {
    scrollToSection(headerList[activeSection.index]);
  }, [activeSection]);

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
