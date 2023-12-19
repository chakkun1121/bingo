"use client";

export default function MachineOperationPage() {
  function startBingo() {
    if (window.opener == null) window.close();
    window.opener.document.getElementById("startBingoButton").click();
    // window.opener.postMessage("startBingo", "*");
  }

  return (
    <section className="operation">
      <h2>操作画面</h2>
      <button onClick={startBingo} className="p-2 rounded bg-gray-200">
        回す(自動で止まります)
      </button>
    </section>
  );
}
