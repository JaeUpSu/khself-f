import { atom } from "recoil";

export const activeSectionState = atom({
  key: "activeSection",
  default: {
    index: 0,
    name: "Home",
  },
});
