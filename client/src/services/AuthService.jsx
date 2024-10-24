import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const authService = async (formData, service) => {
  const response = await axios.post(`${API_URL}/${service}`, formData, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.data;
};
