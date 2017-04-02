var salt = '';
var el = document.getElementById("form");
var sourceURL = document.URL.match(/https?:\/\/.*\/(.*)/)[1];

if (!sourceURL.match(/https?:\/\/.*/)) {
  sourceURL = 'https://ptpb.pw/' + sourceURL;
}

function getCipherText (url) {
  xhr = new XMLHttpRequest();
  xhr.open('GET', sourceURL, false);
  xhr.send();

  return xhr.responseText;
}

var ciphertext = getCipherText(sourceURL);

function passwdCallback() {
  var passwd = document.getElementById("password").value + salt;

  document.write(decrypt(ciphertext, passwd).replace(/[\r|\n]/g, '<br>'));
}
			
if (el.addEventListener) {
  el.addEventListener('submit', passwdCallback, false);
} else if (el.attachEvent) {
  el.attachEvent('onsubmit', passwdCallback);
}
