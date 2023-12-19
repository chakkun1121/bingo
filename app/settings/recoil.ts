import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { settings } from "./info";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: typeof window === "undefined" ? undefined : localStorage,
});
export const settingsAtom = atom({
  key: "settings",
  // key:item.savedName, value:item.initialのかたちにする
  // {[key]:value}[] という形にする
  default: Object.fromEntries(
    settings.map((item) => [item.savedName, item.initial])
  ),
  effects_UNSTABLE: [persistAtom],
});
