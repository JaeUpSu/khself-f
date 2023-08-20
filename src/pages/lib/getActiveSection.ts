import { headerList } from "../components/header";

interface ISection {
  name: string;
  index: number;
}

export const getActiveSection = (dir: string, section: ISection) => {
  if (dir === "up") {
    const nextIndex = section.index + 1;
    if (nextIndex === headerList.length) {
      return section;
    }
    const nextSection = {
      name: headerList[nextIndex],
      index: nextIndex,
    };

    return nextSection;
  } else if (dir === "down") {
    const nextIndex = section.index - 1;
    if (nextIndex < 0) {
      return section;
    }
    const nextSection = {
      name: headerList[nextIndex],
      index: nextIndex,
    };

    return nextSection;
  }
  return section;
};
