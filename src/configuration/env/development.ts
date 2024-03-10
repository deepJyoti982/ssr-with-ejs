"use strict";
import p from "../../../package.json";
var version = p.version;
module.exports = {
    api_version: "1.0.0",
    api_developer: "www.massoftind.com",
    constants: {
        API_VERSION: "Api." + version,
        API_DEVELOPER: "www.massoftind.com",
        API_FOLDER: "v1",
        SITE_NAME: "",
        SITE_URL: ``,
        EMAIL_HEADER_FROM: "Upleashed",
        EMAIL_FROM: "Upleashed <noreply@upleashed.com>",
        EMAIL_TO: "",
        CONTACT_US_EMAIL: "",
        PAGE_LIMIT: 10,

        //HTTP CODES
        HTTP_RESPONSE_OK: 200,
        HTTP_RESPONSE_OK_NO_CONTENT: 204,
        HTTP_RESPONSE_BAD_REQUEST: 400,
        HTTP_RESPONSE_UNAUTHORIZED: 401,
        HTTP_RESPONSE_FORBIDDEN: 403,
        HTTP_RESPONSE_NOT_FOUND: 404,
        HTTP_RESPONSE_METHOD_NOT_ALLOWED: 405,
        HTTP_RESPONSE_NOT_ACCEPTABLE: 406,
        DEFAULT_TIMEZONE: "Africa/Kigali", // Asia/Kolkata
    },
    jwt: {
        JWT_EXPIRES: "1h", //hour
        JWT_SECRET: process.env.JWT_SECRET,
        ALGORITHM: process.env.JWT_ALGORITHM,
    },
    refresh_jwt: {
        JWT_REFRESH_EXPIRES: "24h", //hour
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        ALGORITHM: process.env.JWT_ALGORITHM,
    },

    /**********************LOGGER CONFIGURATION***************** */
    PARENTS_APPLICATION_NAME: "UPLEASHED-API",
    LOGGER_SETTINGS: {
        logger_generate_level: 2, //0=>NOTHING, 1=>ERROR ONLY, 2=>INFO AND ERROR BOTH
        logger_enable_write: true, //ENABLE LOGGER TO WRITE
        logger_error_write_all: true,
        generate_sql_query_log: true,
        logger_enable_application_name: "", //APPLICATION NAME IF WANT TO GENERATE LOGGER ONLY FOR THAT APPLICATION
        logger_enable_module_name: "", //MODULE NAME IF WANT TO GENERATE ONLY PARTICULAR MODULE'S LOGGER EXAMPLE: controller name
    },
    /*********************************************************** */

    FRONT_END_BASE_URL: "http://localhost:4200/",
    FRONT_END_STUDENT_BASE_URL: "http://",

    /*IMAGE UPLOAD FOLDER*/
    USER_IMAGE_FOLDER: "user_images/",
    SUPPORT_TICKET_IMAGE: "support_ticket_image/",
    AUDIO_FILE: "audio_file/",

    /*IMAGE UPLOAD FOLDER*/

    /*Image url*/
    IMAGE_URL_PATH: "",
    /*Image url*/

    /*Badges url*/
    BADGES_ICON_URL: "",
    /*Badges url*/

    SITE_EMAIL_ID: "",

    // Payment //
    SUBSCRIPTION_EXPIRE_DURATION: process.env.SUBSCRIPTION_EXPIRE_DURATION,
    SUBSCRIPTION_AMOUNT: process.env.SUBSCRIPTION_AMOUNT,
};
