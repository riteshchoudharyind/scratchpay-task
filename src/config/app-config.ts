const result = require("dotenv").config({ path: "./src/config/envs/.env" });
if (result.error) {
  throw Error(result.error);
}

export const APP_CONFIG:any = {   
    PORT: process.env.PORT,
}

