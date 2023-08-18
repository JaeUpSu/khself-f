import { Box, Text, Heading, Grid, useBreakpointValue } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";

interface Props {
  title: string;
  skillIcons: React.ReactElement[];
  mt: number;
}

export const SkillIconList = ({ title, skillIcons, mt }: Props) => {
  const skillValues = useBreakpointValue({ base: "0px", md: "25px" });
  const skillGapValues = useBreakpointValue({ base: "30px", md: "50px" });
  const skillJustifyValues = useBreakpointValue({
    base: "center",
    md: "left",
  });

  const topIcons = skillIcons.slice(0, 4);
  const bottomIcons = skillIcons.slice(4);

  return (
    <>
      <Heading as="h3" size="md" mb="10px" mt={mt}>
        {title}
      </Heading>
      <Text textAlign="right" mr="2" color="blackAlpha.700" fontSize="8pt">
        (클릭하면 해당 기술 숙련도 확인)
      </Text>
      <Grid gap="5" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={skillGapValues}
          mt="4"
        >
          {topIcons.map((Icon: any, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={
            bottomIcons.length < 4 ? skillJustifyValues : "center"
          }
          gap={skillGapValues}
          ml={skillValues}
          mt="4"
        >
          {bottomIcons.map((Icon: any, index) => (
            <SkillIcon key={index} gauge={4} icon={<Icon />} />
          ))}
        </Box>
      </Grid>
    </>
  );
};
