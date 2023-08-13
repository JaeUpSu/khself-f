import React, { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import { GaugeBar } from "./GaugeBar";

interface Props {
  icon: ReactElement;
  gauge: number;
}

const SkillIcon = ({ icon, gauge }: Props) => {
  const mdIconSize = 40;

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {React.cloneElement(icon, {
        style: {
          width: `${mdIconSize}px`,
          height: `${mdIconSize}px`,
        },
      })}
      <GaugeBar gauge={gauge} />
    </Flex>
  );
};

export default SkillIcon;
