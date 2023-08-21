import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Title } from "./Title";

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
    <Tabs colorScheme="facebook">
      <TabList>
        {ppts.map((p: IPPT, index: number) => (
          <Tab key={index}>
            <Title title={p.title} isNew={p.isNew} />
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {ppts.map((p: IPPT, index: number) => (
          <TabPanel key={index}>{p.title} !!</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
