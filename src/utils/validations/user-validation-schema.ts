import joi from "joi";

class UserValidation {
  addNewUserValidationSchema;

  constructor() {
    this.addNewUserValidationSchema = joi.object({
      id: joi.number().required(),
      name: joi.string().required(),
    });

    
  }
}

const adminValidationObject = new UserValidation();

export default adminValidationObject;
