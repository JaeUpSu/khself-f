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
} from "@chakra-ui/react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  z-index: 1000;

  border: 2px solid navy;
`;

export default function Home(): React.ReactElement {
  return (
    <main>
      <Box>
        <FixedHeader>
          <Flex alignItems="center">
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
        </FixedHeader>
        <VStack
          spacing={4}
          marginTop="80px"
          padding={4}
          border="2px solid orange"
        >
          <Flex alignItems="center" mt={4} border="2px solid brown">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="man.png"
              alt="Profile Photo"
            />
            <Box ml={4}>
              <Heading as="h2">Your Name</Heading>
              <Box>Short description about yourself</Box>
            </Box>
          </Flex>
          <Box border="2px solid blue">
            <Heading as="h3" size="md">
              Technologies I use:
            </Heading>
            <Box display="flex" gap="20px">
              <Image src="skill.png" alt="Tech 1" boxSize="50px" />
              <Image src="skill.png" alt="Tech 2" boxSize="50px" />
            </Box>
          </Box>
          <Flex border="2px solid red" gap="10px">
            <Tooltip
              color="danger"
              content="Github Link"
              className="capitalize"
            >
              <Link href="https://github.com/your-username" isExternal>
                <IconButton
                  aria-label="GitHub"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                />
              </Link>
            </Tooltip>
            <Tooltip
              color="danger"
              content="Tech Blog Velog Link"
              className="capitalize"
            >
              <Link href="https://your-tech-blog-link.com" isExternal>
                <IconButton
                  aria-label="Tech Blog"
                  icon={<FontAwesomeIcon icon={faV} color="green" />}
                />
              </Link>
            </Tooltip>
          </Flex>
        </VStack>
      </Box>
    </main>
  );
}
