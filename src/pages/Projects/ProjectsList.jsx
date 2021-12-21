import * as React from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class ProjectsList extends React.Component {
    render() {
        return(
            <>
                <Link to="/projectDetails" style={{textDecoration: 'none'}}>
                    <Button style={{
                        marginTop: '140px',
                        color: 'white',
                        background: '#56B4FC',
                        textTransform: 'inherit',
                        marginLeft: '60px',
                        width: '190px',
                        height: '40px'
                    }}> 
                        Register a new project 
                    </Button>
                </Link>

                <TableContainer component={Paper} elevation={3}
                    style={{
                        position: 'relative', 
                        top: '40px', 
                        width: '91%', 
                        marginLeft: 'auto', 
                        marginRight: 'auto',
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: 'bold'}}> Id </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Project name </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> State </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.data.projectMany.map((project) => (
                                <TableRow
                                    key={project._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {project._id}
                                    </TableCell>
                                    <TableCell align="left">{project.projectName}</TableCell>
                                    <TableCell align="left">{project.state}</TableCell>
                                    <TableCell align="left">
                                       <Link to="/projectDetails" style={{textDecoration: 'none'}}>
                                           <Button 
                                            style={{
                                                color: 'white',
                                                background: '#07D165',
                                                textTransform: 'capitalize',
                                                width: '70px',
                                                height: '34px'
                                            }}
                                        
                                        > 
                                                More 
                                            </Button>
                                        </Link>
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

export default ProjectsList;