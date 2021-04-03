import React from "react";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { User } from "../../store/user/models/User";

interface UsersTableProps {
  users: User[];
  searchText: string;
}

export default function UsersTable(props: UsersTableProps) {
  const { searchText, users } = props;
  const history = useHistory();

  function handleHistory(userId: number) {
    history.push(`/${userId}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h4>Name</h4>
            </TableCell>
            <TableCell>
              <h4>Email</h4>
            </TableCell>
            <TableCell>
              <h4>City</h4>
            </TableCell>
            <TableCell>
              <h4>Company</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            if (user.name.includes(searchText) || searchText === "") {
              return (
                <TableRow onClick={() => handleHistory(user.id)} key={user.id}>
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.address.city}</TableCell>
                  <TableCell align="left">{user.company.name}</TableCell>
                </TableRow>
              );
            } else {
              return <div />;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
