let savedKey = "";
window.onload = () => {
  const req = new XMLHttpRequest();
  req.addEventListener("load", function () {
    settingsJson = JSON.parse(this.responseText);
    Settings(settingsJson);
  });
  req.open("GET", "settings.json");
  req.send();
};
let settingsJson = {};
function Settings() {
  savedKey = settingsJson.savedKey;
  const nowSettingsJson = JSON.parse(localStorage.getItem(savedKey)) || {};
  document.getElementById("settingsMain").innerText = "";
  settingsJson.settings.map(function (value, indexNumber) {
    document.getElementById("settingsMain").innerHTML += `
    <div class="setting">
      <label>${value.flag ? "flag(試験運用版) " + value.name : value.name}
        <input
          type="${value.settingInputType}" 
          value="${nowSettingsJson[value.savedName] || value.initial}" 
          ${
            nowSettingsJson[value.savedName] === true || value.initial === true
              ? "checked"
              : ""
          }
          class="setting-input"
          onchange="saveSetting('${indexNumber}')" 
          id="settingInput_${value.savedName}">
      </label>
    </div>
    `;
    if (nowSettingsJson[value.savedName] === true || value.initial === true) {
      document.getElementById("settingInput_" + value.savedName).checked = true;
    }
  });
}
async function saveSetting(itemNumber) {
  const nowSettingsJson = JSON.parse(localStorage.getItem(savedKey)) || {};
  let value;
  const element = document.getElementById(
    "settingInput_" + settingsJson.settings[itemNumber].savedName
  );
  switch (settingsJson.settings[itemNumber].settingInputType) {
    case "checkbox":
      value = element.checked;
      break;
    case "file":
      const fileReader = new FileReader();
      fileReader.readAsDataURL(element.files[0]);
      fileReader.addEventListener("load", function (e) {
        value = e.target.result;
        nowSettingsJson[settingsJson.settings[itemNumber].savedName] = value;
        localStorage.setItem(savedKey, JSON.stringify(nowSettingsJson));
      });
      return;
      break;
    default:
      value = element.value;
      break;
  }
  nowSettingsJson[settingsJson.settings[itemNumber].savedName] = value;
  localStorage.setItem(savedKey, JSON.stringify(nowSettingsJson));
}
