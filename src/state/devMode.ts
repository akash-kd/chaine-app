import { atom, selector, useSetRecoilState } from "recoil";

export const DevModeState = atom({
  key: "DevModeState",
  default: false,
});

export default DevModeState;
