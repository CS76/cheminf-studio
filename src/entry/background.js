const server = "https://dev.coconut.naturalproducts.net/";
// const server = "http://localhost/";
// let chem_user

// const logging = {
//   "info" : true,
//   "warn" : true,
//   "log" : true,
//   "error" : true,
// };

chrome.runtime.onMessage.addListener(function (request) {
  switch (request.action) {
    case "_chem_user_signin": {
      return createTab(
        "browser-extension?src=extension&route=/extension_login_success"
      );
    }
    case "register_chem_user": {
      return createTab(
        "browser-extension?src=extension&route=/extension_login_success"
      );
    }
    case "open_workspace": {
      return appendData('jobs', request.data).then(() => {
        return createTab("workspace.html?action=collection", true)
      })
    }
    case "_chem_user_authenticated": {
      return new Promise((resolve) => {
        Object.keys(request.content).forEach((key) => {
          if (key.indexOf("user") > -1) {
            resolve(setData("chem_user", request.content.user, null));
          }
        });
      });
    }
    case "_chem_user_logout": {
      return clearData();
    }
  }
  return true;
});

// API
// function getUser(){
//   return new Promise((resolve) => {
//     if(chem_user){
//       resolve(chem_user)
//     }else{
//       getData("chem_user", null).then(user => {
//         if(user){
//           chem_user = user
//           resolve(user)
//         }else{
//           resolve(undefined)
//         }
//       })
//     }
//   })
// }

// tabs
// function sendMessageToTabs(tabs) {
//   if (typeof browser === "undefined") {
//     var browser = chrome;
//   }
//   for (const tab of tabs) {
//     browser.tabs
//       .sendMessage(tab.id, { greeting: "Hi from background script" }, () => {
//         browser.tabs.update(tab.id, {active: true});
//       });
//   }
// }

function createTab(value, local = false) {
  if (typeof browser === "undefined") {
    var browser = chrome;
  }

  if(!local){
    return browser.tabs.create({
      url: server + value,
    });
  }else{
    browser.tabs.query({'url': browser.runtime.getURL(value)}, function(tabs) {
        if ( tabs.length > 0 ) {
          browser.tabs.update(tabs[0].id, {'active':true});
          return browser.tabs.reload(tabs[0].id);
        } else {
          return browser.tabs.create({ url: browser.runtime.getURL(value) });
        }
    });
  }
}

function setData(key, value, window) {
  let data = {};
  if (window) {
    data[window + "_" + key] = value;
  } else {
    data[key] = value;
  }
  return new Promise((resolve, reject) =>
    chrome.storage.local.set(data, () =>
      chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve(value)
    )
  );
}

function appendData(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, d => {
      let data = []
      if (d.jobs && d.jobs.length > 0){
        data = d.jobs
      }else{
        data = []
      }
      data.push(value);
      let pData = {}
      pData[key] = data
      chrome.storage.local.set(pData, () => {
        chrome.runtime.lastError ? reject(Error(chrome.runtime.lastError.message)) : resolve(data);
      });
    })
  });
}

function clearData(key, window) {
  if (key) {
    if (window) {
      key = window + "_" + key;
    }
    return new Promise((resolve, reject) => {
      chrome.storage.local.remove(key, function () {
        var error = chrome.runtime.lastError;
        if (error) {
          reject(Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      chrome.storage.local.clear(function () {
        var error = chrome.runtime.lastError;
        if (error) {
          reject(Error(chrome.runtime.lastError.message));
        } else {
          resolve();
        }
      });
    });
  }
}
