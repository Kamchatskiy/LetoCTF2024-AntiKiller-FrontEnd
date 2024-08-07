import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function createData(id, person, tasks) {
  return {
    id,
    person,
    tasks,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState(row.tasks);
  const [allCompleted, setAllCompleted] = React.useState(
    tasks.every((task) => task.completed)
  );

  const validateInput = (input) => {
    return input.trim() !== "";
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;

    if (field === "input" && validateInput(value)) {
      newTasks[index].completed = true;
    }

    setTasks(newTasks);
    setAllCompleted(newTasks.every((task) => task.completed));
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>

        <TableCell>{row.person}</TableCell>

        <TableCell align="right">
          Completed: <Checkbox checked={allCompleted} disabled />
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <Box sx={{ margin: 1, width: "100%" }}>
              <Table size="small" sx={{ width: "100%", tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "40%" }}>
                      Task Description
                    </TableCell>
                    <TableCell sx={{ width: "30%" }}>Input</TableCell>
                    <TableCell sx={{ width: "30%" }} align="right">
                      Completed
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>
                        <TextField
                          sx={{
                            width: "100%",
                          }}
                          value={task.input}
                          onChange={(e) =>
                            handleTaskChange(index, "input", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          checked={task.completed}
                          disabled
                          onChange={(e) =>
                            handleTaskChange(
                              index,
                              "completed",
                              e.target.checked
                            )
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        dateReceived: PropTypes.string.isRequired,
        dateCompleted: PropTypes.string,
        description: PropTypes.string.isRequired,
        input: PropTypes.string,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const Tasks = () => {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://10.0.0.3:5000/tasks");
        const data = await response.json();
        const rows = data.map((task, index) =>
          createData(index, "Person", [task])
        );
        setRows(rows);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ width: "100%", overflowX: "auto" }}>
      <Table aria-label="Tasks" sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Person</TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
