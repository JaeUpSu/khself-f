import { List, ListItem, useBreakpointValue } from "@chakra-ui/react";
import { headerList } from ".";
import ScrollLink from "./ScrollLink";

interface Props {
  isPoint: boolean;
}

export const Nav = ({ isPoint }: Props) => {
  const headerGapValues = useBreakpointValue({ base: 3, md: 8 });

  return (
    <nav style={{ display: isPoint ? "none" : "block" }}>
      <List
        display="flex"
        flexDirection="row"
        alignItems="center"
        listStyleType="none"
        gap={headerGapValues}
      >
        {headerList.map((label: string, index: number) => (
          <ListItem key={index}>
            <ScrollLink to={label} label={label} />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
