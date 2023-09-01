async function showPopUp() {
  if (event.view != window) {
    throw new Error("サブウィンドウのサブウィンドウは開けません");
  }
  const player = document.getElementsByClassName("operation")[0];
  let pipWindow;
  if (window.documentPictureInPicture) {
    pipWindow = await documentPictureInPicture.requestWindow({
      width: player.clientWidth,
      height: player.clientHeight,
      copyStyleSheets: true,
    });
    pipWindow.addEventListener("unload", (event) => {
      const pipPlayer = event.target.body.querySelector(".operation");
      document.querySelector("main").append(pipPlayer);
    });
  } else {
    pipWindow = window.open("", "subpanel", "width=400,height=100");
    pipWindow.addEventListener("unload", (event) => {
      const pipPlayer = event.target.body.querySelector(".operation");
      document.querySelector("main").append(pipPlayer);
    });
  }
  pipWindow.document.body.appendChild(player);
}
