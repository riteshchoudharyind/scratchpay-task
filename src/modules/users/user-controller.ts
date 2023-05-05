import { UserDalServicesInstance }  from "./user-services";
import HttpResponse  from "../../utils/httpResponse/all-http-response";
import traceAndThrowError  from "../../utils/errorHandling/custom-error";
import {Request, Response, NextFunction} from "express"

const postUserController = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const message = await UserDalServicesInstance.postUser(req.body);
     const responseBody = HttpResponse.created({ description: message }, null);
     res.send(responseBody);
   } catch (error) {
     const mappedError = traceAndThrowError(error);
     delete mappedError.body;
     next(mappedError);
   }
 };

const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const users = await UserDalServicesInstance.getUsers();
     const responseBody = HttpResponse.OK(users, null);
     res.status(200).json(responseBody)
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      delete mappedError.body;
      next(mappedError);
   }
};

const getUserByIDController = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const userId = parseInt(req.params.userId);
     const user = await UserDalServicesInstance.getUserById(userId);
     const responseBody = HttpResponse.OK(user, null);
     res.status(200).json(responseBody)
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      delete mappedError.body;
      next(mappedError);
   }
};




export {
   getUsersController, postUserController, getUserByIDController
}