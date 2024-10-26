import styled from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 12px;
  width: 1000px;
  margin: 0 auto;
  word-break: break-all;
  table-layout: fixed;
`;

export const TableHeader = styled.th`
  border: none;
  padding: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff;
`;

export const TableCell = styled.td`
  border: none;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #b0b0b0, -4px -4px 8px #ffffff;
`;
