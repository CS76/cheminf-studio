if (typeof browser === "undefined") {
  var browser = chrome;
}
browser.runtime.onMessage.addListener((data) => {
  var event = new CustomEvent("RecieveContent", { detail: data });
  window.dispatchEvent(event);
  return Promise.resolve({});
});

window.addEventListener("message", function (event) {
  if (event.source != window) {
    return;
  }
  if (event.data.type && event.data.type == "__CHEM_LOGIN__") {
    browser.runtime.sendMessage({
      action: "_chem_user_authenticated",
      content: event.data.content,
    });
  }
  if (event.data.type && event.data.type == "__CHEM_LOGOUT__") {
    browser.runtime.sendMessage({ action: "_chem_user_logout" });
  }
});
