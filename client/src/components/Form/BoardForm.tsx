import React from "react";
import TextArea from "./TextArea.tsx";
import Input from "./Input.tsx";

const BoardForm = ({ title, setTitle, context, setContext, handleSubmit }) => {
  const isDisabled = !title.trim() || !context.trim();

  return (
    <form onSubmit={handleSubmit}>
      <p>title</p>
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>context</p>
      <TextArea value={context} onChange={(e) => setContext(e.target.value)}></TextArea>
      <br />
      <Input type="submit" value="submit" id="submit" disabled={isDisabled} />
    </form>
  );
};

export default BoardForm;
