import {
  Box,
  Text,
  Flex,
  VStack,
  Heading,
  Tooltip,
  IconButton,
  Grid,
  GridItem,
  Avatar,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  SiVelog,
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
import { DiTechcrunch } from "react-icons/di";

import SkillIcon from "./SkillIcon";

export const Profile = () => {
  const smIconSize = 30;

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

  const profileImgValues = useBreakpointValue({
    base: "300px",
    md: "250px",
  });
  const skillValues = useBreakpointValue({ base: "0px", md: "25px" });
  const skillGapValues = useBreakpointValue({ base: "30px", md: "50px" });
  const skillBorderValues = useBreakpointValue({ base: "0px", xl: "1px" });
  const skillJustifyValues = useBreakpointValue({
    base: "center",
    md: "left",
  });

  return (
    <VStack
      spacing={4}
      alignItems="center"
      style={{
        padding: 4,
        width: "100%",
        marginTop: "50px",
        paddingTop: "40px",
        paddingBottom: "40px",
        borderRadius: 30,
        backgroundColor: "white",
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Grid
        pt={5}
        w="100%"
        maxW="850px"
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      >
        <GridItem w="100%" key="pImg" display="flex" justifyContent="center">
          <Avatar
            size="lg"
            src="man.png"
            name="Profile Photo"
            border="1px solid gray"
            boxSize={profileImgValues}
          />
        </GridItem>
        <GridItem w="100%" key="pText" display="flex" justifyContent="center">
          <Box ml={4} mt={7}>
            <Heading as="h2" textAlign="end">
              Kim Hyeon Su
            </Heading>
            <Box textAlign="end" mt="5">
              신입 프론트 엔드
            </Box>
            <Box textAlign="end" mt="3">
              hyeongs2323@gmail.com
            </Box>
            <Flex gap="10px" mt="6" justifyContent="end">
              <Tooltip label="Github Link">
                <ChakraLink href="https://github.com/JaeUpSu" isExternal>
                  <IconButton
                    size="md"
                    aria-label="GitHub"
                    icon={
                      <SiGithub
                        style={{
                          width: `${smIconSize}px`,
                          height: `${smIconSize}px`,
                        }}
                      />
                    }
                  />
                </ChakraLink>
              </Tooltip>
              <Tooltip label="Frontend Log Link">
                <ChakraLink
                  href="https://github.com/JaeUpSu/My-Front-Log/tree/main"
                  isExternal
                >
                  <IconButton
                    size="md"
                    aria-label="Frontend Log"
                    icon={
                      <DiTechcrunch
                        style={{
                          width: `${smIconSize}px`,
                          height: `${smIconSize}px`,
                          color: "#3344dd",
                        }}
                      />
                    }
                  />
                </ChakraLink>
              </Tooltip>
              <Tooltip label="Tech Blog Link">
                <ChakraLink href="https://velog.io/@hugh0223" isExternal>
                  <IconButton
                    size="md"
                    aria-label="Tech Blog"
                    icon={
                      <SiVelog
                        style={{
                          width: `${smIconSize}px`,
                          height: `${smIconSize}px`,
                          color: "#63E6BE",
                        }}
                      />
                    }
                  />
                </ChakraLink>
              </Tooltip>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Box
        py={8}
        px={14}
        mt="10"
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
    </VStack>
  );
};
