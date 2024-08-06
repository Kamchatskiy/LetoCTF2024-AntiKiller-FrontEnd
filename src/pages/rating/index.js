import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(place, person, score) {
  return { place, person, score };
}

const rows = [
  createData(1, "John Doe", 95),
  createData(2, "Jane Smith", 92),
  createData(3, "Bob Johnson", 88),
  createData(4, "Alice Brown", 85),
  createData(5, "Mike Davis", 82),
  createData(6, "Emily Chen", 80),
  createData(7, "David Lee", 78),
  createData(8, "Sarah Taylor", 75),
  createData(9, "Kevin White", 72),
  createData(10, "Olivia Martin", 70),
  createData(11, "William Harris", 68),
  createData(12, "Ava Thompson", 65),
  createData(13, "James Wilson", 62),
  createData(14, "Isabella Garcia", 60),
  createData(15, "Robert Miller", 58),
  createData(16, "Sophia Rodriguez", 55),
  createData(17, "Michael Brown", 52),
  createData(18, "Charlotte Davis", 50),
  createData(19, "Daniel Lee", 48),
  createData(20, "Abigail Johnson", 45),
];

export const Rating = () => {
  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ width: "100%" }} aria-label="rating table">
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>Person</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.place}
              sx={{
                backgroundColor:
                  row.place === 1
                    ? "#ffd700"
                    : row.place === 2
                    ? "#c0c0c0"
                    : row.place === 3
                    ? "#cd7f32"
                    : "inherit",
              }}
            >
              <TableCell sx={{ color: row.place <= 3 ? "#000" : "inherit" }}>
                {row.place}
              </TableCell>
              <TableCell sx={{ color: row.place <= 3 ? "#000" : "inherit" }}>
                {row.person}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: row.place <= 3 ? "#000" : "inherit" }}
              >
                {row.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
