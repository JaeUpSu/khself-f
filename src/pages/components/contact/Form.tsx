import { activeFormState } from "@/pages/services/atoms";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Flex,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const Form = () => {
  const [activeFormIndex, setActiveFormIndex] = useRecoilState(activeFormState);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <VStack w="60%" minW="210px" h="100%" p="5">
        {activeFormIndex === 0 && (
          <>
            <FormControl
              mt={7}
              gap={3}
              w="100%"
              h="211px"
              display="flex"
              flexDir="column"
              justifyContent="center"
            >
              <FormLabel color="telegram.900" fontWeight="semibold">
                Funnel
              </FormLabel>
              <Select value={selectedValue} onChange={handleSelectChange}>
                <option value="option1">지인 소개</option>
                <option value="option2">JaeUpSu 깃허브</option>
                <option value="option3">지원 서류 첨부된 링크</option>
              </Select>
            </FormControl>
            <Flex mt="5" w="100%" justifyContent="right">
              <Button
                colorScheme="facebook"
                onClick={() => setActiveFormIndex(1)}
              >
                다음
              </Button>
            </Flex>
          </>
        )}
        {activeFormIndex === 1 && (
          <>
            <FormControl mt={7} w="100%">
              <FormLabel color="telegram.900" fontWeight="semibold">
                Name
              </FormLabel>
              <Input
                mt={3}
                py={6}
                type="text"
                placeholder="이름을 입력해주세요."
              />
            </FormControl>
            <FormControl mt={8} w="100%">
              <FormLabel color="telegram.900" fontWeight="semibold">
                Email address
              </FormLabel>
              <Input
                mt={3}
                py={6}
                type="email"
                placeholder="이메일을 입력해주세요."
              />
            </FormControl>
            <Flex mt="5" w="100%" justifyContent="right" gap="3">
              <Button onClick={() => setActiveFormIndex(0)}>이전</Button>
              <Button
                colorScheme="facebook"
                onClick={() => setActiveFormIndex(2)}
              >
                다음
              </Button>
            </Flex>
          </>
        )}
        {activeFormIndex === 2 && (
          <>
            <FormControl mt={8} w="100%">
              <FormLabel color="telegram.900" fontWeight="semibold">
                Request
              </FormLabel>
              <Textarea
                mt={3}
                py={6}
                minH="170px"
                placeholder="요청 사항을 작성해주세요."
              />
            </FormControl>
            <Flex mt="5" w="100%" justifyContent="right" gap="3">
              <Button onClick={() => setActiveFormIndex(1)}>이전</Button>
              <Button
                colorScheme="facebook"
                onClick={() => setActiveFormIndex(0)}
              >
                보내기
              </Button>
            </Flex>
          </>
        )}
      </VStack>
    </form>
  );
};
