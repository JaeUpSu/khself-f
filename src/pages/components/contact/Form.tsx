import { activeFormState } from "@/pages/services/atoms";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

export const Form = () => {
  const [activeFormIndex, setActiveFormIndex] = useRecoilState(activeFormState);

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <VStack w="60%" h="100%" py="5" px="10">
        {activeFormIndex === 0 && (
          <>
            <FormControl mt={7} minW="200px">
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
            <FormControl mt={8} minW="200px">
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
            <Flex mt="5" w="100%" justifyContent="right">
              <Button
                colorScheme="twitter"
                onClick={() => setActiveFormIndex(1)}
              >
                다음
              </Button>
            </Flex>
          </>
        )}
        {activeFormIndex === 1 && (
          <>
            <FormControl mt={8} minW="200px">
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
            <Flex mt="5" w="100%" justifyContent="right">
              <Button
                colorScheme="twitter"
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
