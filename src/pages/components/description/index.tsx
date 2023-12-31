import { VStack, Text } from "@chakra-ui/react";
import { Mydata } from "./TopicLists";

export const Description = () => {
  return (
    <VStack
      spacing={2}
      alignItems="center"
      style={{
        width: "100%",
        padding: "40px",
        marginTop: "90px",
        paddingBottom: "30px",
        backgroundColor: "white",
        minHeight: "710px",
        borderRadius: 30,
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Text w="100%" fontWeight="semibold" fontSize="17pt">
        Self Introduce
      </Text>
      <VStack mt="5" w="100%" minH="500px" justifyContent="center">
        <Mydata />
      </VStack>
    </VStack>
  );
};
