import axios from "axios";

const API_URL = "http://localhost:5000/api";

interface Board {
  title: string;
  context: string;
  writer: string;
}

export const fetchBoard = async (): Promise<Board[]> => {
  const response = await axios.get<Board[]>(`${API_URL}/board`);
  return response.data;
};

export const addBoard = async (title: string, context: string, writer: string): Promise<void> => {
  await axios.post<Board>(`${API_URL}/add`, { title, context, writer });
};

export const deleteBoard = async (title: string): Promise<void> => {
  await axios.delete(`${API_URL}/delete`, { data: { title } });
};
