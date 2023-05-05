import userValidation from "./user-validation-schema"

const userValidations = (validationType:string, data:any): any => {
    switch(validationType) {
        case "newUser": return userValidation.addNewUserValidationSchema.validateAsync(data, {abortEarly: false});

        default: return "schema not found"
    }
};

export { userValidations};