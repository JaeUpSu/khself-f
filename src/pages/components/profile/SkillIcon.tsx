import React, { ReactElement } from "react";
import {
  Flex,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  VStack,
  Text,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { GaugeBar } from "../GaugeBar";
import { SkillModal } from "./SkillModal";

interface Props {
  icon: ReactElement;
  gauge: number;
}

const SkillIcon = ({ icon, gauge }: Props) => {
  const mdIconSize = 40;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={onOpen}
    >
      {React.cloneElement(icon, {
        style: {
          width: `${mdIconSize}px`,
          height: `${mdIconSize}px`,
        },
      })}
      <Spacer my="5px" />
      <GaugeBar gauge={gauge} />
      <SkillModal isOpen={isOpen} onClose={onClose} icon={icon} gauge={gauge} />
    </Flex>
  );
};

export default SkillIcon;
