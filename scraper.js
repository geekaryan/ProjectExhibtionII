var data = $("body").text();
chrome.runtime.sendMessage({ data: data });
