import {
  Box,
  Flex,
  Heading,
  Tooltip,
  IconButton,
  Grid,
  GridItem,
  Avatar,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SiVelog, SiGithub } from "react-icons/si";
import { DiTechcrunch } from "react-icons/di";

export const MyInfo = () => {
  const smIconSize = 30;

  const profileImgValues = useBreakpointValue({
    base: "300px",
    md: "250px",
  });
  return (
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
  );
};
