import React from "react";
import Input from "./Input.tsx";

interface BoardFormProps {
  title: string;
  setTitle: (title: string) => void;
  context: string;
  setContext: (context: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BoardForm: React.FC<BoardFormProps> = ({ title, setTitle, context, setContext, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>title</p>
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <p>context</p>
      <Input type="text" value={context} onChange={(e) => setContext(e.target.value)} required />
      <Input type="hidden" name="writer" value={localStorage.getItem("user-id") || ""} />
      <br />
      <Input id="submit" type="submit" value="submit" />
    </form>
  );
};

export default BoardForm;
