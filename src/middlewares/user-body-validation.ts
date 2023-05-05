import {userValidations} from "../utils/validations/index";
import traceAndThrowError from "../utils/errorHandling/custom-error";
import {Request, Response, NextFunction} from "express"


export const userReqBodyValidation = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const validatedBody = await userValidations("newUser", req.body);
        req.validatedBody = validatedBody;
        next()
    } catch (error) {
        const mappedError = traceAndThrowError(error);
        next(mappedError); 
    }
};