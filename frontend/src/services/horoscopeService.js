import axios from "axios";
import { getStoredToken } from "../utils/storage";

const API =
  import.meta.env.VITE_API_URL ||
  "https://nakshatra-app-n2n7.onrender.com/api";

export const getTodayHoroscope = async () => {
  const token = getStoredToken();

  const response = await axios.get(`${API}/horoscope/today`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};