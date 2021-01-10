window.addEventListener('load', function () {
  var script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = chrome.runtime.getURL('inject.js');
  try {
    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);
  } catch (e) {
    document.body.appendChild(script);
  }
});

/*
function init() {
  var script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = chrome.runtime.getURL('inject.js');
  try {
    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);
  } catch (e) {
    document.body.appendChild(script);
  }
}

setTimeout(init, 10000);
*/
