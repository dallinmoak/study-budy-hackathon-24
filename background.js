// background.js
chrome.action.onClicked.addListener((tabId, changeInfo, tab) => {
  // Check if the tab is fully loaded and the URL matches
  if (tab) {
    if (
      changeInfo.status === "complete" &&
      tab.url &&
      tab.url.includes("instructure")
    ) {
      // Inject the content script
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ["content.js"], // Path to your content script
        }
      );
    }
  }
});
