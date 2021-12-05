import { CONFIG } from "./config";
import axios from "axios";

export class ApiFetch {
  static getDAta = async (city) => {
    let url = CONFIG.API_URL.replace("~", city);
    return await axios.get(url + CONFIG.API_kEY);
  };
}
