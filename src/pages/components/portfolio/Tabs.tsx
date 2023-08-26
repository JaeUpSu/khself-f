import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Title } from "./Title";
import { PptCard } from "./PptCard";

interface IPPT {
  title: string;
  isNew: boolean;
}

const ppts = [
  { title: "KHS-elf", isNew: true },
  { title: "Coding Garden", isNew: false },
  { title: "Bangsam", isNew: false },
  { title: "ReactMaster", isNew: false },
  { title: "MyInfo", isNew: false },
  { title: "Runner8", isNew: false },
];

export const PptTabs = () => {
  return (
    <Tabs colorScheme="facebook" display="flex">
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
            _selected={{ backgroundColor: "lightgray" }}
          >
            <Title title={p.title} isNew={p.isNew} />
          </Tab>
        ))}
      </TabList>
      <TabPanels display="flex" justifyContent="center">
        {ppts.map((ppt: IPPT, index: number) => (
          <TabPanel key={index}>
            <PptCard />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
