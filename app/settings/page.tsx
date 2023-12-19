"use client";
import { useRecoilState } from "recoil";
import { settings } from "./info";
import { settingsAtom } from "./recoil";

export default function SettingsPage() {
  const [nowSettings, setNowSettings] = useRecoilState(settingsAtom);
  return (
    <div className="flex flex-col items-center w-full ">
      <main className="max-w-3xl w-full">
        <div className="p-4">
          <h2>設定一覧</h2>
          <p>下から変更したい設定を指定してください(設定は自動保存されます)</p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {settings.map((item, i) => (
            <div key={i} className="p-4 rounded bg-gray-200">
              <label className="flex justify-between select-none">
                {item.flag ? "flag(試験運用版) " + item.name : item.name}

                <input
                  type={item.settingInputType}
                  value={
                    item.settingInputType !== "file"
                      ? nowSettings[item.savedName]
                      : ""
                  }
                  onChange={(e) => {
                    if (item.settingInputType === "file") {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setNowSettings({
                            ...nowSettings,
                            [item.savedName]: e.target.result,
                          });
                        };
                        reader.readAsDataURL(file);
                        alert("画像を読み込みました");
                      }
                      return;
                    }
                    setNowSettings({
                      ...nowSettings,
                      [item.savedName]:
                        item.settingInputType === "checkbox"
                          ? e.target.checked
                          : e.target.value,
                    });
                  }}
                  checked={
                    item.settingInputType === "checkbox"
                      ? nowSettings[item.savedName]
                      : undefined
                  }
                  className={item.settingInputType === "file" && "hidden"}
                />
              </label>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
