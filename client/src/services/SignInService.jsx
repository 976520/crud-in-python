const API_URL = "http://localhost:5000/api";

export const signIn = async (formData) => {
  const response = await fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response.json();
};
