import * as React from 'react';
import { useState, useEffect } from "react";
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/ADetails.css';
import { useQuery, useMutation } from '@apollo/client';
import { FIND_PROJECT, GET_ADVANCES } from '../../graphql/advances/queries';
import CREATE_ADVANCE from '../../graphql/advances/createadv-mut';
import UPDATE_ADV from '../../graphql/advances/updateadv-mut';

export default function AdvanceDetails() {

    const detailsValues = {
        progressDate: '',
        description: '',
        advanceId: '',
        observation: '',
        projectId: ''
    }


    const Navigate = useNavigate();
    const { state } = useLocation();
    const [detValues, setDetailsValues] = useState(detailsValues);

    console.log(state);
    const [createAd] = useMutation(CREATE_ADVANCE, {
        refetchQueries: [GET_ADVANCES,
            'advancesUpdateById'
        ],
    });

    const [updateAd] = useMutation(UPDATE_ADV, {
        refetchQueries: [GET_ADVANCES,
            'advancesUpdateById'
        ],
    });

    function SaveNew() {
        createAd({
            variables:
            {
                record: {
                    id_project: detValues.projectId,
                    progressDate: detValues.progressDate,
                    description: detValues.description,
                }
            }
        });
        Navigate("/advances", { state: { pId: detValues.projectId } })
    }

    function Update() {
        updateAd({
            variables: {
                _id: detValues.advanceId,
                record: {
                    progressDate: detValues.progressDate,
                    description: detValues.description,
                }
            }
        });
        Navigate("/advances", { state: { pId: detValues.projectId } })

    }

    function SaveObservation() {
        updateAd({
            variables: {
                _id: detValues.advanceId,
                record: {
                    observation: detValues.observation,
                }
            }
        });
        Navigate("/advances", { state: { pId: detValues.projectId } })

    }




    useEffect(() => {
        setDetailsValues({
            progressDate: state.progressDate,
            description: state.description,
            advanceId: state.advanceId,
            observation: state.observation,
            projectId: state.projectId
        })
    }, [state]);

    const pId = detValues.projectId;

    const { loading, error, data } = useQuery(FIND_PROJECT, {
        variables: { _id: pId }
    });
    if (loading) return <p> Loading... </p>

    if (error) return <p> Error... {error.message} </p>

    let pById = {};
    if (data.projectById !== null && data.projectById !== undefined && data !== {}) {
        pById = data.projectById.projectName;
    } else {
        pById = "";
    }


    const detailsChange = e => {
        const { name, value } = e.target;
        setDetailsValues({ ...detValues, [name]: value })
        console.log(detValues);
    }

    return (
        <>
            <Header />

            <form className="form-details">
                <fieldset className="field">
                    <legend id="leg1" style={{ width: '130px', color: '#D10CD8' }}> Added advances </legend>
                    <p id="adv">
                        <div id='box-items'>
                            <div style={{ width: '100%' }}>
                                <label htmlFor="advance"> Id: </label> <br />
                                <label type="text" name="advance" disabled id="advance" value={detValues.advanceId}> {detValues.advanceId} </label> <br />
                            </div>
                            <div style={{ marginLeft: '35px', width: '100%' }}>
                                <label style={{ marginLeft: '0' }} htmlFor="progress"> Progress date: </label> <br />
                                <input type="text" name="progressDate" id="progress" placeholder="dd/mm/aaaa" onChange={detailsChange} value={detValues.progressDate} /> <br />
                            </div>
                        </div> <br />
                        <label htmlFor="proName" style={{ marginTop: '12px' }}> Project name: </label> <br />
                        <label name="proName" id="proName" value={pById}>{pById}</label><br />

                        <label htmlFor="description" style={{ marginTop: '12px' }}> Description of the advance: </label> <br />
                        <textarea name="description" id="description" rows="5" onChange={detailsChange} value={detValues.description}></textarea> <br />
                    </p>
                </fieldset>



                <br /><br />
                <div className='observation'>
                    <label htmlFor="lOb"> Leader observations: </label> <br />
                    <textarea placeholder='Type here your observations' name="observation" id="lOb" rows="5" onChange={detailsChange} value={detValues.observation}></textarea> <br />
                </div>

                <Link to="/advances" state={{ pId: detValues.projectId }} style={{ textDecoration: 'none' }}> <Button id="btn-1"> Back </Button> </Link>
                <Button id="btn-2" onClick={Update}> Update </Button>
                <Button style={{

                    color: 'white',
                    background: '#1a75ff',
                    textTransform: 'inherit',
                    marginLeft: '30px',
                    fontWeight: '900',
                    height: '40px',
                    fontSize: '1rem',
                    fontFamily: 'Arial'
                }}
                    onClick={SaveNew}
                >
                    Save New

                </Button>
                <Button style={{

                    color: 'white',
                    background: '#1a75ff',
                    textTransform: 'inherit',
                    marginLeft: '30px',
                    fontWeight: '900',
                    height: '40px',
                    fontSize: '1rem',
                    fontFamily: 'Arial'
                }}
                    onClick={() => SaveObservation()}
                >
                    Save observation

                </Button>
            </form>
        </>
    )

}

