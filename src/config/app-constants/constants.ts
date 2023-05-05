export const appConstants = {
    errors: {
       errorMessage: {
           AuthenticationFailed: "User Authentication failed",
       },
    },
    httpCode: {
        OK: [200, "OK Success"],
        created: [201, "Created Successfuly"],
        badRequest: [400, "Bad request"],
        notFound: [404, "Not found"],
        unproccessed: [422, "Unprocessed"],
        internalServer: [500, "Internal server error"],
    },

}

