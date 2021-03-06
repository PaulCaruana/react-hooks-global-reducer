import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
//import {mode} from "../../services/user/UserReducer";

const useStyles = makeStyles({
    table: {
        width: "100%"
    },
});

const UserTable = ({users, mode, addUser, editUser, deleteUser}) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Box display="flex" p={1} bgcolor="background.paper" >
                <Box p={1} flexGrow={1}>
                    <h3>User list</h3>
                </Box>
                <Box p={1} alignSelf="center">
                    <IconButton color="primary" onClick={addUser}><Add/></IconButton>
                </Box>
            </Box>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Remove</b></TableCell>
                        <TableCell><b>Edit</b></TableCell>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Use name</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell align="left" padding="checkbox">
                                <IconButton  onClick={() => deleteUser(user.id)}><Delete/></IconButton>
                            </TableCell>
                            <TableCell align="left" padding="checkbox">
                                <IconButton  onClick={() => editUser(user.id)}><Edit/></IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable