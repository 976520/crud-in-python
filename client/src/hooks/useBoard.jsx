import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const useBoard = () => {
  const [board, setBoard] = useState([]);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const fetchBoard = useCallback(async () => {
    const response = await axios.get(`${API_URL}/board`);
    setBoard(response.data);
  }, []);

  useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !context.trim()) {
      return;
    }
    await axios.post(`${API_URL}/add`, { title, context });
    setTitle("");
    setContext("");
    fetchBoard();
  };

  const handleDelete = async (title) => {
    await axios.delete(`${API_URL}/delete`, { data: { title } });
    fetchBoard();
  };

  return { board, title, setTitle, context, setContext, handleSubmit, handleDelete };
};

export default useBoard;
