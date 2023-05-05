import {Router} from "express";
import {getUsersController, postUserController, getUserByIDController} from "./user-controller";
import {userReqBodyValidation} from "../../middlewares/user-body-validation"

const userRouter =  Router();

userRouter.get("/v1/users", getUsersController);
userRouter.get("/v1/users/:userId", getUserByIDController);
userRouter.post("/v1/users",userReqBodyValidation,  postUserController);

export default userRouter;
