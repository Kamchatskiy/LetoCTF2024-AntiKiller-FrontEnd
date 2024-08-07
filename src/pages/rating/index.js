import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

export const Rating = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.0.0.3:5000/scoreboard");
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor:
                  index === 0
                    ? "#ffd700"
                    : index === 1
                    ? "#c0c0c0"
                    : index === 2
                    ? "#cd7f32"
                    : "inherit",
              }}
            >
              <TableCell sx={{ color: index <= 2 ? "#000" : "inherit" }}>
                {index + 1}
              </TableCell>
              <TableCell sx={{ color: index <= 2 ? "#000" : "inherit" }}>
                {row.username}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: index <= 2 ? "#000" : "inherit" }}
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
