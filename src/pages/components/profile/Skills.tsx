import { Box, Text, Heading, Grid, useBreakpointValue } from "@chakra-ui/react";

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
import SkillIcon from "./SkillIcon";

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

  const skillValues = useBreakpointValue({ base: "0px", md: "25px" });
  const skillGapValues = useBreakpointValue({ base: "30px", md: "50px" });
  const skillBorderValues = useBreakpointValue({ base: "0px", xl: "1px" });
  const skillJustifyValues = useBreakpointValue({
    base: "center",
    md: "left",
  });

  return (
    <Box
      py={8}
      px={14}
      mt="7"
      border="0px solid rgb(210,210,210)"
      borderWidth={skillBorderValues}
      borderRadius="md"
    >
      <Heading as="h3" size="md" mb="10px">
        Front-End Technologies I use
      </Heading>
      <Text textAlign="right" mr="2" color="blackAlpha.700" fontSize="8pt">
        (클릭하면 해당 기술 숙련도 확인)
      </Text>
      <Grid gap="5" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={skillGapValues}
          mt="4"
        >
          {frontSkillIcons.slice(0, 4).map((Icon, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={skillGapValues}
          ml={skillValues}
          mt="4"
        >
          {frontSkillIcons.slice(4).map((Icon, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
      </Grid>

      <Heading as="h3" size="md" mt="60px" mb="10px">
        Technologies I use
      </Heading>
      <Text textAlign="right" mr="2" color="blackAlpha.700" fontSize="8pt">
        (클릭하면 해당 기술 숙련도 확인)
      </Text>
      <Grid gap="5" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={skillGapValues}
          mt="4"
        >
          {skillIcons.slice(0, 4).map((Icon, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={skillJustifyValues}
          gap={skillGapValues}
          ml={skillValues}
          mt="4"
        >
          {skillIcons.slice(4).map((Icon, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
      </Grid>
    </Box>
  );
};
