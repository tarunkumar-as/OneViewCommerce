import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { UserPost } from "../../store/userPost/models/UserPost";

interface UserPostsTableProps {
  userPosts: UserPost[];
}

export default function UserDetailTable(props: UserPostsTableProps) {
  const { userPosts } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h4>Title</h4>
            </TableCell>
            <TableCell>
              <h4>Body</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userPosts.map((userPost) => (
            <TableRow key={userPost.id}>
              <TableCell align="left">{userPost.title}</TableCell>
              <TableCell align="left">{userPost.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
