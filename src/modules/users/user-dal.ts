import {loadCsvData, updateCsvData} from "../../utils/handle-csv";
import path from "path";

export const usersData = async(id?: number) => {
    const filePath = path.join(__dirname, "../../../data.csv");
   try {
       const usersdata: any = await loadCsvData(filePath);

       if (id) {
         let singleUser = usersdata.find((user: any) => user.id == id);
         return singleUser;
       }
       return usersdata;
   } catch(err) {
    throw err
   }
}

export const addNewUser = async(userData: any) => {
   try {
       const response = await updateCsvData(userData);
       return response;
   } catch(err) {
    throw err
   }
}



