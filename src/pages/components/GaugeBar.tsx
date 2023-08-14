import { Flex, Box } from "@chakra-ui/react";

interface Props {
  gauge: number;
  width?: number;
  height?: number;
}

export const GaugeBar = ({ gauge, width, height }: Props) => {
  return (
    <Flex w={width ? `${width * 5 + 4}px` : "34px"} alignItems="center">
      {[1, 2, 3, 4, 5].map((value) => (
        <Box
          key={value}
          width={width ? `${width}px` : "15px"}
          height={height ? `${height}px` : "8px"}
          backgroundColor={value <= gauge ? "#20FFA4" : "rgb(210,210,210)"}
          mr={value === 5 ? "0px" : "2px"}
        />
      ))}
    </Flex>
  );
};
