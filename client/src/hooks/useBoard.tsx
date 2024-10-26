import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

interface Board {
  title: string;
  context: string;
}

const useBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");

  const fetchBoard = useCallback(async () => {
    const response = await axios.get<Board[]>(`${API_URL}/board`);
    setBoard(response.data);
  }, []);

  useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !context.trim()) {
      return;
    }
    await axios.post<Board>(`${API_URL}/add`, { title, context });
    setTitle("");
    setContext("");
    fetchBoard();
  };

  const handleDelete = async (title: string) => {
    await axios.delete(`${API_URL}/delete`, { data: { title } });
    fetchBoard();
  };

  return { board, title, setTitle, context, setContext, handleSubmit, handleDelete };
};

export default useBoard;
