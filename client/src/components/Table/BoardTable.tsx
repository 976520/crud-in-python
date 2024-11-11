import React from "react";
import { Table, TableHeader, TableCell } from "./Style.tsx";
import DeleteIcon from "../../assets/DeleteIcon.tsx";
import HeartIcon from "../../assets/HeartIcon.tsx";
import useBoard from "../../hooks/useBoard.tsx";

interface Board {
  writer: string;
  title: string;
  context: string;
}

interface BoardTableProps {
  board: Board[];
  onDelete: (title: string, writer: string) => void;
  currentUser: string | null;
}

const BoardTable: React.FC<BoardTableProps> = ({ board, onDelete, currentUser }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader style={{ width: "5%" }}>No.</TableHeader>
        <TableHeader style={{ width: "10%" }}>Writer</TableHeader>
        <TableHeader style={{ width: "20%" }}>Title</TableHeader>
        <TableHeader style={{ width: "55%" }}>Context</TableHeader>
        <TableHeader style={{ width: "5%" }}>Del</TableHeader>
        <TableHeader style={{ width: "5%" }}>Like</TableHeader>
      </tr>
    </thead>
    <tbody>
      {board.map((row, index) => (
        <tr key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row.writer}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.context}</TableCell>
          <TableCell
            onClick={() => currentUser === row.writer && onDelete(row.title, row.writer)}
            style={{ cursor: currentUser === row.writer ? "pointer" : "default" }}
          >
            {currentUser === row.writer && <DeleteIcon />}
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
