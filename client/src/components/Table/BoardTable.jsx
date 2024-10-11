import React from "react";
import { Table, TableHeader, TableCell } from "./Style";
import DeleteIcon from "../../assets/DeleteIcon";
import HeartIcon from "../../assets/HeartIcon";

const BoardTable = ({ board, onDelete }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader width="3%">No.</TableHeader>
        <TableHeader width="15%">Writer</TableHeader>
        <TableHeader width="15%">Title</TableHeader>
        <TableHeader width="35%">Context</TableHeader>
        <TableHeader width="3%">Del</TableHeader>
        <TableHeader width="5%">Like</TableHeader>
      </tr>
    </thead>
    <tbody>
      {board.map((row, index) => (
        <tr key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{localStorage.getItem("user-id")}</TableCell>
          <TableCell>{row[0]}</TableCell>
          <TableCell>{row[1]}</TableCell>
          <TableCell onClick={() => onDelete(row[0])} style={{ cursor: "pointer" }}>
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
