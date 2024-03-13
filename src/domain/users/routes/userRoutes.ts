import express from 'express';
import { UserMiddleware } from '../middleware/userMiddleware';
import { UserController } from '../controller/userController';

/* Creating Instance of Classes */
const userMiddleware = new UserMiddleware();
const userController = new UserController();

const router = express.Router();
let middleware = [];


router.route("/signup").get(userController.getSignupPage);

middleware = [userMiddleware.createUser()];
router.route("/signup").post(middleware, userController.createUser);

export { router as userRoutes }