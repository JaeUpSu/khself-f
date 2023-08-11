import styled from "styled-components";

import {
  Box,
  Heading,
  Image,
  VStack,
  Link as ChakraLink,
  IconButton,
  Flex,
  Spacer,
  Tooltip,
  Text,
  List,
  ListItem,
  useBreakpointValue,
  Grid,
  GridItem,
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
import ScrollLink from "./components/ScrollLink";

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

  const headerGapValues = useBreakpointValue({ base: 3, md: 8 });
  const profileImgValues = useBreakpointValue({ base: "300px", md: "250px" });

  return (
    <main>
      <VStack border="2px solid salmon" w="100%" px="32px" pb="10">
        <VStack py="10px" w="100%" maxW="1200px">
          <FixedHeader>
            <Flex w="100%" justifyContent="center">
              <Flex
                px="2"
                py="3"
                w="100%"
                maxW="1200px"
                alignItems="center"
                border="2px solid yellow"
              >
                <Heading as="h1" size="md" mr="4">
                  My Portfolio
                </Heading>
                <Spacer />
                <nav>
                  <List
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    listStyleType="none"
                    gap={headerGapValues}
                  >
                    <ListItem key={1}>
                      <ScrollLink to="Home" label="Home" />
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
              </Flex>
            </Flex>
          </FixedHeader>
          <section
            id="Home"
            style={{
              padding: 4,
              width: "100%",
              marginTop: "80px",
              border: "2px solid orange",
            }}
          >
            <VStack spacing={4} alignItems="center">
              <Grid
                pt={5}
                w="100%"
                maxW="850px"
                border="2px solid brown"
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
                          href="https://github.com/your-username"
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
                      <Tooltip label="Tech Blog Link">
                        <ChakraLink
                          href="https://your-tech-blog-link.com"
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
              <Box border="2px solid blue" mt="10">
                <Heading as="h3" size="md">
                  Front-End Technologies I use
                </Heading>
                <Box display="flex" alignItems="center" gap="50px" mt="4">
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
                <Heading as="h3" size="md" mt="60px">
                  Technologies I use
                </Heading>
                <Box display="flex" alignItems="center" gap="50px" mt="4">
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
