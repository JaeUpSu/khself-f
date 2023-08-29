import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useMediaQuery,
} from "@chakra-ui/react";
import { Title } from "./Title";
import { PptCard } from "./PptCard";
import MainSlider from "./PptSlider";

interface IPPT {
  title: string;
  isNew: boolean;
}

const ppts = [
  { title: "KHS-elf", isNew: true },
  { title: "Coding Garden", isNew: false },
  { title: "Bangsam", isNew: false },
  { title: "React Master", isNew: false },
  { title: "MyInfo", isNew: false },
  { title: "Runner8", isNew: false },
];

export const PptTabs = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");

  return (
    <Tabs
      w="100%"
      maxW="700px"
      display="flex"
      flexDir={isSmallerThan850 ? "column" : "row"}
    >
      {isSmallerThan850 ? (
        <>
          <TabList
            h="100%"
            mt="3"
            mb="2"
            mx="4"
            gap="1"
            display="flex"
            flexDir="row"
            borderRadius="lg"
            boxShadow="md"
          >
            {ppts.slice(0, 3).map((p: IPPT, index: number) => (
              <Tab
                key={index}
                p="2"
                flex="1"
                minH="50px"
                borderRadius="lg"
                _selected={{ backgroundColor: "rgb(235,235,235)" }}
              >
                <Title title={p.title} isNew={p.isNew} />
              </Tab>
            ))}
          </TabList>
          <TabList
            h="100%"
            mx="4"
            gap="1"
            display="flex"
            flexDir="row"
            borderRadius="lg"
            boxShadow="md"
          >
            {ppts.slice(3).map((p: IPPT, index: number) => (
              <Tab
                key={index}
                p="2"
                flex="1"
                minH="50px"
                borderRadius="lg"
                _selected={{ backgroundColor: "rgb(235,235,235)" }}
              >
                <Title title={p.title} isNew={p.isNew} />
              </Tab>
            ))}
          </TabList>
        </>
      ) : (
        <TabList
          h="100%"
          my="5"
          gap="1"
          display="flex"
          flexDir="column"
          borderRadius="lg"
          boxShadow="md"
        >
          {ppts.map((p: IPPT, index: number) => (
            <Tab
              key={index}
              flex="1"
              minH="50px"
              borderRadius="lg"
              _selected={{ backgroundColor: "rgb(235,235,235)" }}
            >
              <Title title={p.title} isNew={p.isNew} />
            </Tab>
          ))}
        </TabList>
      )}
      <TabPanels w="90%" display="flex" justifyContent="center">
        {ppts.map((ppt: IPPT, index: number) => (
          <TabPanel key={index} w="100%">
            <MainSlider />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
