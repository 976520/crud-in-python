import React from "react";
import TextArea from "./TextArea";
import Input from "./Input";

const BoardForm = ({ title, setTitle, context, setContext, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>title</p>
    <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    <p>context</p>
    <TextArea value={context} onChange={(e) => setContext(e.target.value)}></TextArea>
    <br />
    <Input type="submit" value="submit" id="submit" />
  </form>
);

export default BoardForm;
