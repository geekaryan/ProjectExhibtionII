chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(
    {
      file: "jquery.min.js",
    },
    function () {
      chrome.tabs.executeScript({
        file: "scraper.js",
      });
    }
  );
});
