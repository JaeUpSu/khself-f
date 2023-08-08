import {
  Box,
  Heading,
  Image,
  VStack,
  Button,
  Link,
  IconButton,
} from "@chakra-ui/react";
import styled from "styled-components";

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  z-index: 1000;
`;

const ContactButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default function Home(): React.ReactElement {
  return (
    <main>
      <Box>
        <FixedHeader>
          <Heading as="h1">My Portfolio</Heading>
        </FixedHeader>
        <VStack spacing={4} marginTop="80px" padding={4}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="man.png"
            alt="Profile Photo"
          />
          <Heading as="h2">Your Name</Heading>
          <Box>Short description about yourself</Box>
          <Box>
            <Heading as="h3" size="md">
              Technologies I use:
            </Heading>
            <Box display="flex" gap="10px">
              <Image src="man.png" alt="Tech 1" boxSize="50px" />
              <Image src="man.png" alt="Tech 2" boxSize="50px" />
              {/* ... add more tech icons */}
            </Box>
          </Box>
          <Box>
            <Link href="https://github.com/your-username" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<Image src="man.png" boxSize="6" />}
              />
            </Link>
            <Link href="https://your-tech-blog-link.com" isExternal>
              <IconButton
                aria-label="Tech Blog"
                icon={<Image src="man.png" boxSize="6" />}
              />
            </Link>
          </Box>
        </VStack>
        <ContactButton
          colorScheme="teal"
          variant="solid"
          onClick={() => alert("Direct Message Functionality")}
        >
          Message Me
        </ContactButton>
      </Box>
    </main>
  );
}
