import React from "react";
import { Table, TableHeader, TableCell } from "./Style";

const BoardTable = ({ board, onDelete }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader width="5%">No.</TableHeader>
        <TableHeader width="15%">Title</TableHeader>
        <TableHeader width="35%">Context</TableHeader>
        <TableHeader width="10%"></TableHeader>
      </tr>
    </thead>
    <tbody>
      {board.map((row, index) => (
        <tr key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row[0]}</TableCell>
          <TableCell>{row[1]}</TableCell>
          <TableCell>
            <button onClick={() => onDelete(row[0])}>Delete</button>
          </TableCell>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BoardTable;
