import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://www.themealdb.com/api/json/v1";

export async function get(endpoint, params = {}) {
  const url = `${API_URL}/${process.env.REACT_APP_API_KEY}/${endpoint}`;
  try {
    const response = await axios.get(url, {
      params,
    });
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
}
