import { Box, Stack, StackDivider } from "@chakra-ui/react";
import { Topic } from "./Topic";

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
    <Stack p="10" w="100%" divider={<StackDivider />} spacing="10">
      {topics.map((topic: ITopic, index: number) => (
        <Box key={index}>
          <Topic topic={topic} />
        </Box>
      ))}
    </Stack>
  );
};
