import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Fab } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles({
  table: {
    width: 700,
    margin: "auto",
  },
});

export const MyTable = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([
    {
      name: "a",
      email: "a@gmail.com",
    },
    {
      name: "b",
      email: "b@gmail.com",
    },
    {
      name: "c",
      email: "c@gmail.com",
    },
    {
      name: "d",
      email: "d@gmail.com",
    },
    {
      name: "e",
      email: "e@gmail.com",
    },
    {
      name: "f",
      email: "f@gmail.com",
    },
    {
      name: "g",
      email: "g@gmail.com",
    },
    {
      name: "h",
      email: "h@gmail.com",
    },
    {
      name: "i",
      email: "i@gmail.com",
    },
    {
      name: "j",
      email: "j@gmail.com",
    },
  ]);

  const handleUp = (i) => {
    if (i === 0) {
      return;
    }
    let prevUsers = [...users];
    let temp = prevUsers[i - 1];
    prevUsers[i - 1] = prevUsers[i];
    prevUsers[i] = temp;
    setUsers(prevUsers);
  };
  const handleDown = (i) => {
    if (i === users.length - 1) {
      return;
    }
    let prevUsers = [...users];
    let temp = prevUsers[i + 1];
    prevUsers[i + 1] = prevUsers[i];
    prevUsers[i] = temp;
    setUsers(prevUsers);
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Up</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Down</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <Fab
                  color="primary"
                  aria-label="up"
                  disabled={index === 0}
                  onClick={() => handleUp(index)}
                >
                  <ArrowUpwardIcon />
                </Fab>
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">
                <Fab
                  color="primary"
                  aria-label="down"
                  disabled={index === users.length - 1}
                  onClick={() => handleDown(index)}
                >
                  <ArrowDownwardIcon />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
