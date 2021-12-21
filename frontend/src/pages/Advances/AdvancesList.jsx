import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



export default function AdvancesList({ filtered, projectId }) {

    const Navigate = useNavigate();

    const passDataValues = (advances) => {

        if (advances !== null && advances !== undefined) {
            Navigate("/advanceDetails", {
                state: {
                    projectId: advances.id_project,
                    progressDate: advances.progressDate,
                    description: advances.description,
                    advanceId: advances._id,
                    observation: advances.observation
                }
            });

        } else {

            Navigate("/advanceDetails", {
                state: {
                    projectId: projectId,
                    progressDate: "",
                    description: "",
                    advanceId: "",
                    observation: ""
                }
            });
        }

    }
    return (

        <div>

            <div>
                <TableContainer component={Paper} elevation={3}
                    style={{
                        position: 'relative',
                        top: '150px',
                        width: '91%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >


                    <h1 style={{
                        color: "black",
                        display: "block",
                        fontsize: "2em",
                        margintop: 'auto',
                        marginbottom: 'auto',
                        marginleft: 'auto',
                        marginright: 'auto',
                        fontweight: "bold"
                    }}>
                        Advances list
                    </h1>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}> Id </TableCell>
                                <TableCell align="left" style={{ fontWeight: 'bold' }}> Description</TableCell>
                                <TableCell align="left" style={{ fontWeight: 'bold' }}> Progress date </TableCell>
                                <TableCell align="left" style={{ fontWeight: 'bold' }}> Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered.map((advances) => (
                                <TableRow
                                    key={advances._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="advances">
                                        {advances._id}
                                    </TableCell>
                                    <TableCell align="left">{advances.description}</TableCell>
                                    <TableCell align="left">{advances.progressDate}</TableCell>
                                    <TableCell align="left">

                                        <Button
                                            style={{
                                                color: 'white',
                                                background: '#07D165',
                                                textTransform: 'capitalize',
                                                width: '70px',
                                                height: '34px'
                                            }}
                                            onClick={() => passDataValues(advances)}
                                        >
                                            More
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>


                </TableContainer>


            </div>

            <div>

                <Link to="/projectDetails" style={{ textDecoration: 'none' }}>
                    <Button style={{
                        marginTop: '200px',
                        color: 'white',
                        background: '#1a75ff',
                        textTransform: 'inherit',
                        marginLeft: '40px',
                        width: '190px',
                        height: '40px'
                    }}>
                        Back
                    </Button>
                </Link>
                <Button
                    style={{
                        color: 'white',
                        background: 'green',
                        textTransform: 'inherit',
                        marginTop: '200px',
                        marginLeft: '20px',
                        width: 'auto',
                        height: '40px'
                    }}
                    onClick={() => passDataValues()}
                >
                    Create a new advance
                </Button>


            </div>

        </div>



    )

    /* } */



}

