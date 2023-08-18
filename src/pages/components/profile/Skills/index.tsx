import { Box, useBreakpointValue } from "@chakra-ui/react";

import {
  SiGithub,
  SiReact,
  SiReactquery,
  SiReacthookform,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiAndroid,
  SiDjango,
  SiSentry,
  SiFirebase,
  SiGraphql,
  SiAmazonaws,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SkillIconList } from "./SkillIconList";

export const Skills = () => {
  const frontSkillIcons = [
    SiReact,
    SiTypescript,
    SiRedux,
    SiNextdotjs,
    SiGraphql,
    SiReactquery,
    SiReacthookform,
    SiJest,
  ];

  const skillIcons = [
    SiDjango,
    SiGithub,
    SiSentry,
    SiFirebase,
    SiAndroid,
    SiAmazonaws,
    FaJava,
  ];

  const skillBorderValues = useBreakpointValue({ base: "0px", xl: "1px" });

  return (
    <Box
      py={8}
      px={14}
      mt={7}
      borderWidth={skillBorderValues}
      borderRadius="md"
    >
      <SkillIconList
        title="Front-End Technologies I use"
        skillIcons={frontSkillIcons}
        mt={0}
      />
      <SkillIconList
        title="Technologies I use"
        skillIcons={skillIcons}
        mt={8}
      />
    </Box>
  );
};
