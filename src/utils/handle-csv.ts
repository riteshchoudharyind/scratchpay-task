import fs from "fs";
import csv from "csvtojson";
import { stringify } from "csv-stringify/sync";
import path from "path";

export const loadCsvData = async (filePath: string) => {
  try {
    const jsonData = await csv()
    .fromFile(filePath)
    return jsonData
  } catch (err) {
    throw err;
  }
};

export const updateCsvData = async (userData: any) => {
  try {
    const filePath = path.join(__dirname, "../../data.csv");
    const extractedCsvData: any = await loadCsvData(filePath);

    // Modify the CSV data as needed
    extractedCsvData.push(userData);

    // Convert the modified data back to CSV format
    const newCsvData = stringify(extractedCsvData, { header: true });

    // Write the new CSV data back to the file system
    await fs.promises.writeFile(filePath, newCsvData, "utf8");
    return "Ok";
  } catch (err) {
    throw err;
  }
};
