var salt = "jbpksGUENnr4U5eKhQn2DY4w";

function encrypt(plaintext, pass) {
  return CryptoJS.AES.encrypt(plaintext, pass + salt);
}

function decrypt(ciphertext, pass) {
  return CryptoJS.AES
    .decrypt(ciphertext, pass + salt)
    .toString(CryptoJS.enc.Utf8);
}
