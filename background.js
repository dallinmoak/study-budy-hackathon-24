// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
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
        },
        () => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          }
        }
      );
    }
  }
});
