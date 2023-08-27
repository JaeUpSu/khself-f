import { Text, VStack } from "@chakra-ui/react";
import { PptTabs } from "./Tabs";

export const Portfolio = () => {
  return (
    <VStack
      spacing={7}
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
        PortFolio
      </Text>
      <VStack alignItems="center" gap={5} w="100%">
        <PptTabs />
      </VStack>
    </VStack>
  );
};
