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
import { useMutation } from '@apollo/client';
import { DELETE_INSCRIPTIONS_ID } from '../../graphql/notifications/mutations';
import UserDetails from './UserDetails';
import ProjectDetails from './ProjectDetails';
import Swal from 'sweetalert2';


const NotificationsList = ({data, sModalEdit}) => {
    const [inscriptionRemoveById] = useMutation(DELETE_INSCRIPTIONS_ID);

    const handleOnClick = (id)=> {
        Swal.fire({
            title: 'Are you sure delete this user?',
            text: 'This user will be permanently deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
                ).then(() => {
                    inscriptionRemoveById({ variables: { id }});
                    window.location.reload(true);
                })
            }
        })
    }
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
                            <TableCell style={{fontWeight: 'bold'}}> Id </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Applicant </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Project Name </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Entry Date </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Egress Date </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> State </TableCell>
                            <TableCell align="left" style={{fontWeight: 'bold'}}> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.inscriptionMany.map((inscription) => (
                            <TableRow
                                key={inscription._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="inscription">
                                    {inscription._id}
                                </TableCell>
                                <TableCell align="left">{UserDetails(inscription.id_student)}</TableCell>
                                <TableCell style={{width: '500px'}} align="left">{ProjectDetails(inscription.id_project)}</TableCell>
                                <TableCell align="left">{inscription.entryDate}</TableCell>
                                <TableCell align="left">{inscription.egressDate}</TableCell>
                                <TableCell align="left">{inscription.state}</TableCell>
                                <TableCell align="left">
                                    <Tooltip title="Edit">
                                        <IconButton onClick = {() => sModalEdit(inscription._id,inscription.id_student,inscription.id_project,inscription.entryDate,inscription.egressDate,inscription.state)} aria-label="edit" style={{background: '#67ADFC', marginRight: '8px'}}>
                                            <EditOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleOnClick(inscription._id)} aria-label="delete" style={{background: '#FC6767'}}>
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


export default NotificationsList;