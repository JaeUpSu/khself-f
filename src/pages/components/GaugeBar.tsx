import { Flex, Box } from "@chakra-ui/react";

interface Props {
  gauge: number;
}

export const GaugeBar = ({ gauge }: Props) => {
  return (
    <Flex mt="7px" w="34px" alignItems="center">
      {[1, 2, 3, 4, 5].map((value) => (
        <Box
          key={value}
          width="5px"
          height="8px"
          backgroundColor={value <= gauge ? "#20FFA4" : "rgb(210,210,210)"}
          mr={value === 5 ? "0px" : "2px"}
        />
      ))}
    </Flex>
  );
};
