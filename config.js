//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234906628353";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlsa05uc0Z0SE4wYk5ScHJVYTgyaDlZRGVpdW1aU3BPem0rZ24xUTduUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUd5Q0VWOWdmT2xBK0R0dTY3ZlJEdjNoR1VVb0c4ZE91cjNublpoa0EyND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTWhIcS9iRTRWQU5hRWdnRGpoTWk0Ryt2RnBtcDM3SnFyc1FSWVlBcGxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2TlRBM2pwRGwweGRSNzRKL00wNUtKMXN2emk1ZEQ4RjRra3ROQys4SHdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQU2ZtdzlNL0FhZmxxUGlXUHJEd0J1Rld2My8xZ2pqSFZnRm94MjhpSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCZGwwKy9RWG4xYUZmWCt4Q2ROUHRjUnRNWTlsWDVrUkN1dlo4eC8wWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1YNnJtZFNERTU4c1ZyaXFZSDdESE1CWmtxNVlETU1Sa2ZObTgxZVBGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVRKMjAvM1YrSDJnRERqa1pIZHhPMWp1c0kvaFp6elM5MnpOcWxIMU1Fcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBwQy9iZ0M3M0NFR0pPWmZIT09iUVRXb1Y5V3ljVDBuWXZFTG8zKytVcldhL05MOUt5RnN3bStRdUZZZDlrM0FFNGR1VHJOeTJEbVUrV3ZJbG9wQ0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6ImVjZWtvU2F5NVJ5ZlkzYlVGZVI0VlN2THR4ZG5XQmZFZklHWnM1NkkzWG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVnUHhfT29KUWlXUVpoVXU2eHVRUXciLCJwaG9uZUlkIjoiM2ExNTBlMWMtMjYxNy00ZjgxLWE3NjEtMjJhMmQ0Yjc5MDUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZIQU9rbCswaFUra2F3a0xKZy95VWJHNk9nTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYlJvdXhjTXlxR1Z2aXNIYnJ4UUJRbEd5Vnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjhHWFkxQU4iLCJtZSI6eyJpZCI6IjIzMzUzMjA4MjI3OTo0OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQYW5kYXlhdHRpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU2EvdDBFRU16WHZMUUdHQ1FnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtaE42OHk4UHJ0RjQ1S2RLWHh6V25Yd2lEMWlQT1V4ODNQODNXS2RZMGxvPSIsImFjY291bnRTaWduYXR1cmUiOiJXTWR3bzFCUVc1a3Y2OEw4eStRbGN1ZkVpQmxJbkR1UUM5OHBBMVU1RkFhQXo2dzhMNDRsV1ZWUk5DdzBoOVlyeUovNXZXM1hmby9jZXZ4OGh3TmpCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2RRRkRDUlVaeGlwSkt1cHdESzI1aStJdzM0L2VzUmkyeTN5QzBycGhIMmwvRTc0dS9lTGptTjZZbVJCRmgzUjB5UTY5OS9JWFQ0Ui95NlV0anB6REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1MzIwODIyNzk6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWm9UZXZNdkQ2N1JlT1NuU2w4YzFwMThJZzlZanpsTWZOei9OMWluV05KYSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDY1ODkwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMT3IifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
