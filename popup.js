chrome.runtime.onMessage.addListener(function (request) {
  $("#data").text(request.data);
});
