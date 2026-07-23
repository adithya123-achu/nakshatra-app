import axios from "axios";
import { getStoredToken } from "../utils/storage";

const API = "http://127.0.0.1:5000/api";

export const getTodayHoroscope = async () => {
  const token = getStoredToken();

  const response = await axios.get(
    `${API}/horoscope/today`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};