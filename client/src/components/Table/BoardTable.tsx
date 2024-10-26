import React from "react";
import { Table, TableHeader, TableCell } from "./Style.tsx";
import DeleteIcon from "../../assets/DeleteIcon.tsx";
import HeartIcon from "../../assets/HeartIcon.tsx";

interface Board {
  title: string;
  context: string;
}

interface BoardTableProps {
  board: Board[];
  onDelete: (title: string) => void;
}

const BoardTable: React.FC<BoardTableProps> = ({ board, onDelete }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader>No.</TableHeader>
        <TableHeader>Writer</TableHeader>
        <TableHeader>Title</TableHeader>
        <TableHeader>Context</TableHeader>
        <TableHeader>Del</TableHeader>
        <TableHeader>Like</TableHeader>
      </tr>
    </thead>
    <tbody>
      {board.map((row, index) => (
        <tr key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{localStorage.getItem("user-id")}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.context}</TableCell>
          <TableCell onClick={() => onDelete(row.title)} style={{ cursor: "pointer" }}>
            <DeleteIcon />
          </TableCell>
          <TableCell style={{ cursor: "pointer" }}>
            <HeartIcon />
          </TableCell>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BoardTable;
