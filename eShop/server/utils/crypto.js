const crypto = require("crypto");
let iv = crypto.randomBytes(16);
let key = "gVkYp3s6v9y$B&E)H@McQeThWmZq4t7w";

module.exports.encryptData = (data) => {
  let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(data, "utf-8", "hex");
  encryptedData = encrypted += cipher.final("hex");
  return encryptedData;
};

module.exports.decryptData = (data) => {
  let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(data, "hex", "utf-8");
  decryptedMsg = decrypted += decipher.final("utf-8");
  return decryptedMsg;
};
