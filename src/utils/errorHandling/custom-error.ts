import HttpResponse from "../httpResponse/all-http-response";

/// need to handle error properly...

const traceAndThrowError = (error: any) => {
    let errors;
     if (error.details) {
        // Throw error when joi validation gets failed.
        errors = error.details.map((errorKey: any) => {
            const errorMessageKey = errorKey.message.match(/"(.*?)"/)[1];
            return {
                label: errorMessageKey,
                body: {message: errorKey.message}
            }
        });
        return HttpResponse.badRequest(errors)

    }  else {
        errors = [{ label: "Internal", message: "Something went wrong" }];
        return HttpResponse.internalServer(errors);
    }
};

export default traceAndThrowError;
