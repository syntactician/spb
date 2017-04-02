var salt = '';
var sourceURL = document.URL.match(/https?:\/\/.*\/(.*)/)[1];
var el = document.getElementById("form");

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

function encrypt(plaintext, pass) {
  return CryptoJS.AES.encrypt(plaintext, pass + salt);
}

function decrypt(ciphertext, pass) {
  return CryptoJS.AES
    .decrypt(ciphertext, pass + salt)
    .toString(CryptoJS.enc.Utf8);
}

function passwdCallback() {
  var passwd = document.getElementById("password").value + salt;

  // document.write(decrypt(ciphertext, passwd).replace(/[\r|\n]/g, '<br>'));
  // console.log(decrypt(ciphertext, passwd).replace(/[\r|\n]/g, '<br>'));
  document.write(decrypt(ciphertext, passwd).replace(/[\r|\n]/g, '<br>'));
}

if (el.addEventListener) {
  el.addEventListener('submit', passwdCallback, false);
} else if (el.attachEvent) {
  el.attachEvent('onsubmit', passwdCallback);
}
