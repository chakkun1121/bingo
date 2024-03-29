export const settings = [
  {
    name: "印刷時のカードのヘッターの文字非表示",
    savedName: "printCardHeaderHidden",
    settingInputType: "checkbox",
    initial: false,
    flag: false,
  },
  {
    name: "印刷時のカードのIDの表示を消す",
    savedName: "printCardIDhidden",
    settingInputType: "checkbox",
    initial: false,
    flag: false,
  },
  {
    name: "印刷時のカードのヘッターのアイコン",
    savedName: "printCardHeaderIcon",
    settingInputType: "file",
    initial: "./img/headerLogo.png",
    flag: false,
  },
  {
    name: "ビンゴマシーンのヘッター部分のロゴ",
    savedName: "machineDefaultHeaderIcon",
    settingInputType: "file",
    initial: "./img/default-header.png",
    flag: false,
  },
  {
    name: "印刷時のカードのヘッターのアイコンの位置",
    savedName: "printCardHeaderIconPosition",
    settingInputType: "text",
    initial: "left",
    flag: false,
  },
];
