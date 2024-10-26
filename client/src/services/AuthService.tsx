import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const authService = async (formData, service) => {
  const response = await axios.post(`${API_URL}/${service}`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
