import { Box, Divider, Heading, Text } from "@chakra-ui/react";

interface Props {
  topic: { title: string; content: string };
}

export const Topic = ({ topic }: Props) => {
  return (
    <Box>
      <Heading size="sm" textTransform="uppercase">
        {topic.title}
      </Heading>
      <Divider h="10px" colorScheme="facebook" />
      <Text pt="2" fontSize="sm">
        {topic.content}
      </Text>
    </Box>
  );
};
