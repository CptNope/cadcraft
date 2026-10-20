let deferredInstall;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstall = e;
  const btn = document.getElementById("cadcraft-install");
  if (btn) btn.hidden = false;
});
window.addEventListener("appinstalled", () => {
  deferredInstall = undefined;
  const btn = document.getElementById("cadcraft-install");
  if (btn) btn.hidden = true;
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "cadcraft-install";
  btn.textContent = "Install CADCraft";
  btn.type = "button";
  btn.hidden = true;
  Object.assign(btn.style, {
    position: "fixed", right: "12px", bottom: "12px", zIndex: "1000",
    padding: "10px 15px", border: "1px solid #3986a5", borderRadius: "12px",
    background: "#225e79", color: "#fff", font: "600 13px system-ui",
    boxShadow: "0 2px 12px #0003", cursor: "pointer"
  });
  btn.addEventListener("click", async () => {
    if (!deferredInstall) return;
    const prompt = deferredInstall;
    deferredInstall = undefined;
    btn.hidden = true;
    try { await prompt.prompt(); await prompt.userChoice; }
    catch (error) { console.warn("CADCraft install:", error); }
  });
  document.body.appendChild(btn);
});
