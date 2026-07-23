(() => {
  const root = globalThis.document.documentElement;
  if (globalThis.top === globalThis.self) {
    root.classList.remove("xidu-frame-pending");
    delete root.dataset.xiduFrameBlocked;
    return;
  }

  root.dataset.xiduFrameBlocked = "true";
})();
