import styled from "styled-components";

import {
  Box,
  Text,
  Image,
  Flex,
  VStack,
  Spacer,
  Heading,
  Tooltip,
  IconButton,
  List,
  ListItem,
  Grid,
  GridItem,
  Link as ChakraLink,
  useBreakpointValue,
  useMediaQuery,
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
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";

import ScrollLink from "./components/ScrollLink";
import HamburgerButton from "./components/header/HamburgerButton";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 32px;
  background: #fff;
  z-index: 1000;
  border-bottom: 1px solid lightgray;
`;

export default function Home(): React.ReactElement {
  const smIconSize = 30;
  const mdIconSize = 40;

  const [isBelowBreakPoint] = useMediaQuery("(max-width: 550px)");

  const headerGapValues = useBreakpointValue({ base: 3, md: 8 });
  const profileImgValues = useBreakpointValue({ base: "300px", md: "250px" });
  const skillValues = useBreakpointValue({ base: "0px", md: "25px" });
  const skillGapValues = useBreakpointValue({ base: "30px", md: "50px" });
  const skillBorderValues = useBreakpointValue({ base: "0px", md: "1px" });
  const skillJustifyValues = useBreakpointValue({ base: "center", md: "left" });

  const handleReloadAndScroll = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <VStack w="100%" px="32px" pb="10">
        <VStack py="10px" w="100%" maxW="1200px">
          <FixedHeader>
            <Flex w="100%" justifyContent="center">
              <Flex px="2" w="100%" maxW="1200px" alignItems="center">
                <Heading
                  size="xl"
                  onClick={handleReloadAndScroll}
                  cursor="pointer"
                >
                  <Image
                    src="khs_logo.png"
                    boxSize="70px"
                    objectFit="contain"
                    maxWidth="100%"
                  />
                </Heading>
                <Spacer />
                <nav style={{ display: isBelowBreakPoint ? "none" : "block" }}>
                  <List
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    listStyleType="none"
                    gap={headerGapValues}
                  >
                    <ListItem key={1}>
                      <ScrollLink to="Profile" label="Profile" />
                    </ListItem>
                    <ListItem key={2}>
                      <ScrollLink to="Description" label="Description" />
                    </ListItem>
                    <ListItem key={3}>
                      <ScrollLink to="PortFolio" label="PortFolio" />
                    </ListItem>
                    <ListItem key={4}>
                      <ScrollLink to="Contact" label="Contact" />
                    </ListItem>
                  </List>
                </nav>
                {isBelowBreakPoint && <HamburgerButton />}
              </Flex>
            </Flex>
          </FixedHeader>
          <Image mt="130px" w="400px" h="340px" src="khs_image2.png" />
          <section
            id="Profile"
            style={{
              padding: 4,
              width: "100%",
              marginTop: "50px",
              paddingTop: "40px",
              paddingBottom: "40px",
              borderRadius: 30,
              boxShadow:
                "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <VStack spacing={4} alignItems="center">
              <Grid
                pt={5}
                w="100%"
                maxW="850px"
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              >
                <GridItem
                  w="100%"
                  key="pImg"
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    src="man.png"
                    alt="Profile Photo"
                    borderRadius="full"
                    border="1px solid gray"
                    boxSize={profileImgValues}
                  />
                </GridItem>
                <GridItem
                  w="100%"
                  key="pText"
                  display="flex"
                  justifyContent="center"
                >
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
                        <ChakraLink
                          href="https://github.com/JaeUpSu"
                          isExternal
                        >
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
                                }}
                              />
                            }
                          />
                        </ChakraLink>
                      </Tooltip>
                      <Tooltip label="Tech Blog Link">
                        <ChakraLink
                          href="https://velog.io/@hugh0223"
                          isExternal
                        >
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
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={skillGapValues}
                    mt="4"
                  >
                    <SiReact
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiTypescript
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiRedux
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiNextdotjs
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={skillGapValues}
                    ml={skillValues}
                    mt="4"
                  >
                    <SiGraphql
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiReactquery
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiReacthookform
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiJest
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                  </Box>
                </Grid>

                <Heading as="h3" size="md" mt="60px" mb="10px">
                  Technologies I use
                </Heading>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={skillGapValues}
                    mt="4"
                  >
                    <SiDjango
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiGithub
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiSentry
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <SiFirebase
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={skillJustifyValues}
                    gap={skillGapValues}
                    ml={skillValues}
                    mt="4"
                  >
                    <SiAndroid
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                    <FaJava
                      style={{
                        width: `${mdIconSize}px`,
                        height: `${mdIconSize}px`,
                      }}
                    />
                  </Box>
                </Grid>
              </Box>
            </VStack>
          </section>
          <section
            id="Description"
            style={{
              padding: 2,
              marginTop: 10,
              width: "100%",
              height: "100vh",
              border: "2px solid green",
            }}
          >
            <VStack w="100%" alignItems="start">
              <Text fontWeight="bold" fontSize="xl">
                설명
              </Text>
              <Text>Description</Text>
            </VStack>
          </section>
          <section
            id="PortFolio"
            style={{
              padding: 2,
              marginTop: 10,
              width: "100%",
              height: "100vh",
              border: "2px solid darkGray",
            }}
          >
            <VStack w="100%" alignItems="start">
              <Text fontWeight="bold" fontSize="xl">
                포트폴리오
              </Text>
              <Text>Portfolio</Text>
            </VStack>
          </section>
          <section
            id="Contact"
            style={{
              padding: 2,
              marginTop: 10,
              width: "100%",
              height: "100vh",
              border: "2px solid lightGray",
            }}
          >
            <VStack w="100%" alignItems="start">
              <Text fontWeight="bold" fontSize="xl">
                연락하기
              </Text>
              <Text>Contact Me</Text>
            </VStack>
          </section>
        </VStack>
      </VStack>
    </main>
  );
}
