import React from "react";
import { useSetRecoilState } from "recoil";
import { Link } from "@chakra-ui/react";
import { activeSectionState } from "@/pages/services/atoms";
import { headerList } from ".";

interface Props {
  to: string;
  label: string;
}

const ScrollLink = ({ to, label }: Props) => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  const onEvent = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setActiveSection({ index: headerList.indexOf(to), name: to });
  };

  return (
    <Link
      py="2"
      px="3"
      h="100%"
      display="flex"
      cursor="pointer"
      fontWeight="bold"
      color="rgb(20, 20, 20)"
      onClick={onEvent}
      alignItems="center"
      justifyContent="center"
      _hover={{
        borderRadius: 10,
        backgroundColor: "rgb(225, 225, 225)",
      }}
    >
      {label}
    </Link>
  );
};

export default ScrollLink;
