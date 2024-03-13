import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import Cryptr from "cryptr";

import { IStatusBuild, IMethodNotAllowed, IResponse_object_detail } from "./common-interface"

const cryptr = new Cryptr("1");
const commonFn = class commonClass {
    jwt: typeof JWT;
    api_var: {
        version: string,
        developer: string
    };

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

    /* Verify Token */
    verifyToken(token: string) {
        return new Promise(function (resolve, reject) {
            this.jwt.verify(
                token,
                global.CONFIG.jwt.JWT_SECRET,
                global.CONFIG.jwt.ALGORITHM,
                function (err: any, result: unknown) {
                    if (result) {
                        return resolve(result);
                    } else {
                        return reject(err)
                    }
                }
            );
        });
    }

    /* Password Encryption */
    hashPassword(password: string) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hash(password, salt);
        return hash;
    }

    /* Password Compare */
    comparePassword(password: string, hashPassword: string) {
        if (bcrypt.compareSync(password, hashPassword)) {
            return true;
        } else {
            return false;
        }
    }

    /* Id encryption */
    encryptId(id: string) {
        const encryptedId = cryptr.encrypt(id);
        return encryptedId;
    }

    /* Id decryption */
    decryptId(encId: string) {
        const decryptedId = cryptr.decrypt(encId);
        return decryptedId;
    }

    capitalizeFirstLetter(object: any) {
        object.status.msg = object.status.msg.toLowerCase();
        object.status.msg = object.status.msg.charAt(0).toUpperCase() + object.status.msg.slice(1);
        return object;
    }

    /* Successfull response, 200 Series  */
    public successStatusBuild(res: IStatusBuild, dataset: object, msg: string): void {

        let response_status = {
            msg: msg,
            action_status: true
        };
        // if (Object.keys(dataset).length === 0) {
        // 	dataset = {};
        // }
        let response_data: IResponse_object_detail = {
            data: dataset,
            status: response_status,
            publish: this.api_var
        };

        res.status(global.CONFIG.constants.HTTP_RESPONSE_OK);
        res.send({ response: this.capitalizeFirstLetter(response_data) });
    }

    /* Bad request response, 400 Series */
    badRequestStatusBuild(res: IStatusBuild, msg: string) {
        let response_status = {
            msg: msg,
            action_status: false
        };
        let response_data: IResponse_object_detail = {
            data: {},
            status: response_status,
            publish: this.api_var
        };

        res.status(global.CONFIG.constants.HTTP_RESPONSE_BAD_REQUEST);
        res.send({ response: this.capitalizeFirstLetter(response_data) });
    }

    /* Method not allowed response */
    public methodNotAllowedStatusBuild(res: IMethodNotAllowed, msg: string): void {
        let response_status = {
            msg: msg,
            action_status: false
        };
        let response_data: IResponse_object_detail = {
            data: {},
            status: response_status,
            publish: this.api_var

        };

        res.setHeader('content-type', 'application/json');
        res.status(global.CONFIG.constants.HTTP_RESPONSE_METHOD_NOT_ALLOWED);
        res.send({ response: this.capitalizeFirstLetter(response_data) });
    }
}

export default commonFn;
