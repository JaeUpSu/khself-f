import {
  Box,
  Heading,
  Image,
  VStack,
  Button,
  Link,
  IconButton,
  Flex,
  Spacer,
  HStack,
  Tooltip,
  Text,
} from "@chakra-ui/react";

import styled from "styled-components";
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

  return (
    <main>
      <VStack border="2px solid salmon" w="100%" px="32px">
        <VStack py="10px" w="100%" maxW="1200px">
          <FixedHeader>
            <Flex w="100%" justifyContent="center">
              <Flex
                p="2"
                w="100%"
                maxW="1200px"
                alignItems="center"
                border="2px solid gray"
              >
                <Heading as="h1" size="md" mr="4">
                  My Portfolio
                </Heading>
                <Spacer />
                <HStack spacing={4}>
                  <Button variant="link">Home</Button>
                  <Button variant="link">PPT</Button>
                  <Button variant="link">Contact Me</Button>
                </HStack>
              </Flex>
            </Flex>
          </FixedHeader>
          <VStack
            w="100%"
            spacing={4}
            padding={4}
            marginTop="80px"
            alignItems="center"
            border="2px solid orange"
          >
            <Flex
              w="90%"
              alignItems="center"
              justifyContent="space-around"
              mt={4}
              border="2px solid brown"
            >
              <Image
                borderRadius="full"
                border="1px solid gray"
                boxSize="250px"
                src="man.png"
                alt="Profile Photo"
              />
              <Box ml={4} border="2px solid purple">
                <Heading as="h2">Kim Hyeon Su</Heading>
                <Box textAlign="end" mt="5">
                  신입 프론트 엔드
                </Box>
                <Box textAlign="end" mt="3">
                  hyeongs2323@gmail.com
                </Box>
                <Flex
                  border="2px solid red"
                  gap="10px"
                  mt="6"
                  justifyContent="end"
                >
                  <Tooltip label="Github Link">
                    <Link href="https://github.com/your-username" isExternal>
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
                    </Link>
                  </Tooltip>
                  <Tooltip label="Tech Blog Link">
                    <Link href="https://your-tech-blog-link.com" isExternal>
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
                    </Link>
                  </Tooltip>
                </Flex>
              </Box>
            </Flex>
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
                  border={true}
                />
                <SiTypescript
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiRedux
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiNextdotjs
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiGraphql
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiReactquery
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiReacthookform
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiJest
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
              </Box>
              <Heading as="h3" size="md" mt="8">
                Technologies I use
              </Heading>
              <Box display="flex" alignItems="center" gap="50px" mt="4">
                <SiDjango
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiGithub
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiSentry
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiFirebase
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <SiAndroid
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
                <FaJava
                  style={{
                    width: `${mdIconSize}px`,
                    height: `${mdIconSize}px`,
                  }}
                  border={true}
                />
              </Box>
            </Box>
          </VStack>
          <VStack
            p="2"
            mt="10"
            w="100%"
            border="2px solid green"
            alignItems="start"
          >
            <Text fontWeight="bold" fontSize="xl">
              설명
            </Text>
            <Text>Description</Text>
          </VStack>
          <VStack
            p="2"
            mt="10"
            w="100%"
            border="2px solid darkGray"
            alignItems="start"
          >
            <Text fontWeight="bold" fontSize="xl">
              포트폴리오
            </Text>
            <Text>Portfolio</Text>
          </VStack>
        </VStack>
      </VStack>
    </main>
  );
}
