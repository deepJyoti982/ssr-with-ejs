import { Request, Response } from 'express';
import { ICreateUser } from '../interface/user-interface';
import UserModel from '../models/userModel';

export class UserController {
    constructor() { }

    getSignupPage = (req: Request, res: Response) => {
        return res.render("signup");
    }

    createUser = async (req: Request, res: Response) => {
        console.log("hit")
        try {
            const { fullName, email, password, profile_image, role } = req.body;
            console.log({
                fullName, email, password, profile_image, role
            })
            const userObj: ICreateUser = {
                fullName,
                email,
                password,
                profileImageURL: profile_image ?? '',
                role: role ?? 'USER'
            }

            let resultUser = await UserModel.create(userObj);
            console.log(resultUser);
            return res.redirect("/")
        } catch (error) {
            console.log('=============', error);
            return global.HELPER.badRequestStatusBuild(res, "Something went wrong!");
        }
    }
}