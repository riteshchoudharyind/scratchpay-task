import {usersData, addNewUser} from "./user-dal";

class UserDalServices {
    async postUser(validatedUserBody: any) {
        try {
           const message = await addNewUser(validatedUserBody);
            return message
        } catch (error) {
           throw error
        }
    };
    async getUsers() {
        try {
            const users = await usersData();
            return users;
        } catch (error) {
              throw error;
        }
    };

    async getUserById(id: number) {
        try {
            const user = await usersData(id);
            return user;
        } catch (error) {
              throw error;
        }
    };
}

export const UserDalServicesInstance = new UserDalServices();