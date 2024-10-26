import { useEffect, useState, useCallback } from "react";
import { fetchBoard, addBoard, deleteBoard } from "../services/BoardService";

interface Board {
  title: string;
  context: string;
  writer: string;
}

const useBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [writer, setWriter] = useState<string>("");

  const fetchBoards = useCallback(async () => {
    const boards = await fetchBoard();
    setBoard(boards);
  }, []);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addBoard(title, context, writer);
    setTitle("");
    setContext("");
    setWriter("");
    fetchBoards();
  };

  const handleDelete = async (title: string) => {
    await deleteBoard(title);
    fetchBoards();
  };

  return { board, title, setTitle, context, setContext, writer, setWriter, handleSubmit, handleDelete };
};

export default useBoard;
