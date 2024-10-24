import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signUpService = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.data;
};
