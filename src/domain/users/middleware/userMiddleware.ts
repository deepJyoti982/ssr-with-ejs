import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

export class UserMiddleware {
    createUser(): object {
        return [
            check('fullName')
                .trim()
                .not()
                .isEmpty()
                .withMessage("User full name is required!"),
            check("email")
                .trim()
                .not()
                .isEmpty()
                .withMessage("User email address is required!")
                .isEmail()
                .withMessage("Invalid email address!"),
            check("password")
                .trim()
                .not()
                .isEmpty()
                .withMessage("Password is required!")
                .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                .withMessage("Password should contain atleast 8 characters, atleast a symbol, 1 upper case letter, 1 lower case letter, and 1 number."),

            async (req: Request, res: Response, next: NextFunction) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    var response_data = {};
                    response_data = errors.array();
                    return res.status(400).send({ response: response_data });
                } else {
                    next();
                }
            },
        ]
    }
}