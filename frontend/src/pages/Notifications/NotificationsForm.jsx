import * as React from 'react';
import UserDetails from './UserDetails';
import ProjectDetails from './ProjectDetails';
import { UPDATE_INSCRIPTIONS_ID } from '../../graphql/notifications/mutations';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

const NotificationsForm = ({
    id,
    student,
    project,
    entrydate,
    egressdate,
    state,
    showEdit,
    handleChange
    }) => {

    const [state2, setState] = useState(state.state);
    const handleOnChange = (event)=> {
        setState({ ...state2, [event.target.name]: event.target.value});
      }

    const [inscriptionUpdateById, { data }] = useMutation(UPDATE_INSCRIPTIONS_ID);

    const handleSubmit = (event)=> {
        inscriptionUpdateById({variables: { id: id.id, record:{...state2} }});
        event.preventDefault();
        window.location.href = '/notifications'
    }
    return(
        <>
            <Modal isOpen={showEdit} style={{ marginTop: '130px' }}>
                <ModalHeader>
                    <div>
                        <h3>Modify Applicant State</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input className="form-control" name="notif" readOnly type="text" onChange={handleChange} value={id.id} />
                    </FormGroup>
                    <FormGroup style={{marginTop: '-12px'}}>
                        <label>Applicant:</label>
                        <input className="form-control" readOnly name="applicant" type="text" onChange={handleChange} value={UserDetails(student.student)} />
                    </FormGroup>
                    <FormGroup style={{marginTop: '-12px'}}>
                        <label>Project name:</label>
                        <input className="form-control" readOnly name="pName" type="text" onChange={handleChange} value={ProjectDetails(project.project)} />
                    </FormGroup>
                    <FormGroup style={{marginTop: '-12px'}}>
                        <label>Entry date::</label>
                        <input className="form-control" readOnly name="entry" type="text" onChange={handleChange} value={entrydate.entrydate} />
                    </FormGroup>
                    <FormGroup style={{marginTop: '-12px'}}>
                        <label>Egress date::</label>
                        <input className="form-control" readOnly name="egress" type="text" onChange={handleChange} value={egressdate.egressdate} />
                    </FormGroup>
                    <FormGroup style={{marginTop: '-12px'}}>
                    <form onSubmit={handleSubmit}>
                    <label> State: </label>
                    <select className="form-control" name="state" onChange={handleOnChange} >
                        <option value="" selected disabled hide style={{ display: 'none' }}> {state.state} </option>
                        <option value="Aceptado"> Aceptado </option>
                        <option value="Rechazado"> Rechazado </option>
                        <option value="Pendiente"> Pendiente </option>
                    </select>
                    <ModalFooter>
                        <Button type="submit" value="update" color="success" > Modify </Button>
                        <Button color="danger" onClick={() => window.location.href = '/notifications'}> Cancel </Button>
                    </ModalFooter>
                    </form>
                    </FormGroup>
                </ModalBody>
            </Modal>
        </>
    )
}

export default NotificationsForm;