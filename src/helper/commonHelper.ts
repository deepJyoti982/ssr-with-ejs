import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import Cryptr from "cryptr";

const cryptr = new Cryptr("1");
const commonFn = class commonClass {
    jwt: typeof JWT;
    api_var: {};

    constructor() {
        this.jwt = JWT,
            this.api_var = {
                version: global.CONFIG.constants.api_version,
                developer: global.CONFIG.constants.api_developer
            }
    }


    /* Token Creation */
    createToken(userDetails: string | object) {
        let jwtToken = this.jwt.sign(userDetails, global.CONFIG.jwt.JWT_SECRET, {
            algorithm: global.CONFIG.ALGORITHM,
            expiresIn: global.CONFIG.JWT_EXPIRES
        })
    }


}
