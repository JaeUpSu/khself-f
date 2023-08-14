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
import { GaugeBar } from "./GaugeBar";

interface Props {
  icon: ReactElement;
  gauge: number;
}

const SkillIcon = ({ icon, gauge }: Props) => {
  const mdIconSize = 40;
  const lgIconSize = 80;
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack my="10">
              <Text fontWeight="bold" fontSize="2xl" mb="3">
                기술 숙련도
              </Text>
              {React.cloneElement(icon, {
                style: {
                  width: `${lgIconSize}px`,
                  height: `${lgIconSize}px`,
                },
              })}

              <Box my="3">
                <Text fontWeight="semibold" fontSize="16pt" mb="2">
                  Next.js
                </Text>
                <GaugeBar gauge={gauge} width={13} height={18} />
              </Box>
              <Text fontSize="9pt">
                최신 서버 렌더링 React 애플리케이션을 구축하는 데 사용 <br />
                개발 프로세스를 능률화하고 빠르고 효율적이며 <br /> SEO 친화적인
                웹 애플리케이션
              </Text>
              <Box
                border="1px solid gray"
                borderRadius="md"
                w="100%"
                p="3"
                mt="5"
                fontSize="10pt"
              >
                <Text fontSize="13pt" fontWeight="semibold" mb="1">
                  Me
                </Text>
                <hr />
                <Text mt="2">
                  Next.js 는 SSR 와 SSG 등을 이용하여 SEO 점수를 높이고 성능을
                  최적화하기 위해 사용합니다. <br />
                  <br /> Next.js 13 버전에서 사용되는 App 라우터등과 같은
                  기술들은 구글링을 통한 참고 자료가 많지 않아 호환과 러닝커브가
                  높은 문제 때문에 기존에 사용하던 Pages 라우팅을 통해 SSR 과
                  SSG 등과 같은 기술을 사용하며 학습하고 있습니다.
                </Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SkillIcon;
