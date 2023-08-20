import { VStack, Text, Image, Progress } from "@chakra-ui/react";
import { Form } from "./Form";

export const Contact = () => {
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
        Contact Me
      </Text>
      <VStack mt="10" w="60%" alignItems="center" justifyContent="center">
        <Image
          boxSize="200px"
          objectFit="cover"
          maxWidth="100%"
          height="100px"
          top={0}
          left={0}
          transform="translate(50, 50)"
          src="khself-logo2.png"
        />
        <Progress
          w="70%"
          minW="170px"
          value={100}
          size="xs"
          colorScheme="pink"
        />
      </VStack>
      <Form />
    </VStack>
  );
};
