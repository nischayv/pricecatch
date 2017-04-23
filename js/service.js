chrome.tabs.onUpdated.addListener((id, info, tab) => {
  if (tab.url.toLowerCase().indexOf("amazon.com") > -1) {
    chrome.pageAction.show(tab.id);
  }
});
