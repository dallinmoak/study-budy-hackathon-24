// background.js
let todo =
chrome.action.onClicked.addListener((tabId, changeInfo, tab) => {
  if (tab) {
    if (
      changeInfo.status === "complete" &&
      tab.url &&
      tab.url.includes("instructure")
    ) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ["content.js"],
        }
      );
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message from content script:", message);
  if (message.type === "LINKS") {
    chrome.storage.local.set({ list: message.list });
  }
  
  return true;
});


function getData(key) {
  chrome.storage.local.get([key], (result) => {
    if (result.key){
      return result.key
    }else{
      return 'No Saved Data'
    }
  });
}

