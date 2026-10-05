chrome.action.onClicked.addListener((tab) => {
  chrome.script.executeScript({
    target: { tabId: tab.id },
    func: () => {
      console.log('Extension clicked!');
    }
  });
});