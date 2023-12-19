"use client";
import { useRecoilValue } from "recoil";
import { settingsAtom } from "../settings/recoil";

export default function MachineHeaderImage() {
  const settings = useRecoilValue(settingsAtom);
  return (
    <div className="flex flex-col items-center">
      <img
        src={settings["machineDefaultHeaderIcon"]}
        alt="ヘッダー画像"
        className="max-w-[100vw] max-h-[25vh]"
      />
    </div>
  );
}
