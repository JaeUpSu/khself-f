import { Box, Stack } from "@chakra-ui/react";
import { Topic } from "./Topic";

const CustomStackDivider = () => <Box h="1.5px" bg="gray.400" mt="10" mb="5" />;

interface ITopic {
  title: string;
  content: string;
}

export const Mydata = () => {
  const topics = [
    {
      title: "자기 소개",
      content: "View a summary of all your clients over the last month.",
    },
    {
      title: "개발 직무에 관심을 갖게 된 계기",
      content: "View a summary of all your clients over the last month.",
    },
    {
      title: "개발 직무 관련 준비, 노력 및 성과",
      content: "View a summary of all your clients over the last month.",
    },
    {
      title: "입사 후 포부",
      content: "View a summary of all your clients over the last month.",
    },
  ];

  return (
    <Stack p="10" w="100%" divider={<CustomStackDivider />}>
      {topics.map((topic: ITopic, index: number) => (
        <Box key={index}>
          <Topic topic={topic} />
        </Box>
      ))}
    </Stack>
  );
};
