const FileSystem = require("fs");
var CryptoJS = require("crypto-js");
var JsonData = require("./data.json");
console.log(JsonData);

// Encrypt
var encryptedtext = CryptoJS.AES.encrypt(
  JSON.stringify(JsonData),
  "My-Secret-Here"
).toString();
//log encrypted JsonData
console.log("Encrypt JsonData -");
console.log(encryptedtext);

//create Json file
FileSystem.writeFile(
  "dataEncrypted.json",
  JSON.stringify(encryptedtext, null, 4),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON array is saved");
  }
);

// Decrypt
var bytes = CryptoJS.AES.decrypt(encryptedtext, "JSON.parse(bytes.toString($");
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//create Json file
FileSystem.writeFile(
  "dataDecrypted.json",
  JSON.stringify(decryptedData, null, 4),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON array is saved");
  }
);
