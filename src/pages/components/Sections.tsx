import { useEffect, useRef, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { Profile } from "./profile";
import { Description } from "./description";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";
import { scrollToSection } from "../lib/scrollToSection";
import { useDidMountEffect } from "../hooks/useDidMountEffect";

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
  const [activeSection, setActiveSection] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useDidMountEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const deltaY = e.deltaY;
      const scrollDirection = deltaY > 0 ? "up" : "down";

      const delay = 500;

      scrollTimeoutRef.current = setTimeout(() => {
        console.log("scroll", scrollDirection, activeSection);

        if (scrollDirection === "down" && activeSection < 4) {
          setActiveSection((i) => i + 1);
        } else if (scrollDirection === "up" && activeSection > 0) {
          setActiveSection((i) => i - 1);
        }
      }, delay);
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    scrollToSection(sections[activeSection].name);
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
