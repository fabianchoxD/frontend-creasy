import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

class UsersList extends React.Component {
    render() {
        return(
            <>
                <TableContainer component={Paper} elevation={3}
                    style={{
                        position: 'relative', 
                        top: '150px', 
                        width: '91%', 
                        marginLeft: 'auto', 
                        marginRight: 'auto',
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: 'bold'}}> Names </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Lastnames </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Identification </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> E-mail </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Type user </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> State </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.data.UserMany.map((user) => (
                                <TableRow
                                    key={user.names}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.names}
                                    </TableCell>
                                    <TableCell align="left">{user.lastnames}</TableCell>
                                    <TableCell align="left">{user.identification}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left">{user.typeUser}</TableCell>
                                    <TableCell align="left">{user.state}</TableCell>
                                    <TableCell align="left">
                                        <Tooltip title="Edit">
                                            <IconButton onClick = {() => this.props.showME(user)} aria-label="edit" style={{background: '#67ADFC', marginRight: '8px'}}>
                                                <EditOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="delete" onClick={() => this.props.remove(user.identification)} style={{background: '#FC6767'}}>
                                                <DeleteOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default UsersList;