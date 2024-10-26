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
  onDelete: (title: string) => void;
}

const BoardTable: React.FC<BoardTableProps> = ({ board, onDelete }) => (
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
      {/* board 배열을 순회하며 테이블 row 생성 */}
      {board.map((row, index) => (
        <tr key={index}>
          {/* 테이블 셀에 데이터 바인딩 */}
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row.writer}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.context}</TableCell>
          {/* 삭제 아이콘 클릭 시 onDelete 함수 호출 */}
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
