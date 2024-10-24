import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signInService = async (formData) => {
  const response = await axios.post(`${API_URL}/signin`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
