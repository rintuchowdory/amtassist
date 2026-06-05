/**
 * AmtAssist – background.js
 * Service worker. Handles tab events and badge updates.
 */

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && !tab.url.startsWith("chrome://")) {
    chrome.action.setBadgeText({ tabId, text: "" });
    chrome.action.setBadgeBackgroundColor({ color: "#1a56db" });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("[AmtAssist] Extension installed.");
});
