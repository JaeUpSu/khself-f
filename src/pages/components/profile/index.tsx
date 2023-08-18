import { VStack } from "@chakra-ui/react";

import { Skills } from "./Skills";
import { MyInfo } from "./MyInfo";

export const Profile = () => {
  return (
    <VStack
      spacing={2}
      alignItems="center"
      style={{
        padding: 4,
        width: "100%",
        marginTop: "50px",
        paddingTop: "20px",
        paddingBottom: "30px",
        borderRadius: 30,
        backgroundColor: "white",
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
      }}
    >
      <MyInfo />
      <Skills />
    </VStack>
  );
};
