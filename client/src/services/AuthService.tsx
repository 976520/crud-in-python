import axios from "axios";

const API_URL = "http://localhost:5000/api";

interface AuthFormData {
  email: string;
  password: string;
}

export const authService = async (formData: AuthFormData, service: string): Promise<any> => {
  const response = await axios.post(`${API_URL}/${service}`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
