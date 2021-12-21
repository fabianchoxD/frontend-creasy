import * as React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

class UsersForm extends React.Component {
    render() {
        return(
            <>
                <Modal isOpen={this.props.modalEdit} style={{ marginTop: '130px' }}>
                    <ModalHeader>
                        <div>
                            <h3>Modify User State</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Names:</label>
                            <input className="form-control" name="names" readOnly type="text" value={this.props.form.names} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Lastnames:</label>
                            <input className="form-control" readOnly name="lastnames" type="text" value={this.props.form.lastnames} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Identification:</label>
                            <input className="form-control" readOnly name="identification" type="number" value={this.props.form.identification} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>E-mail:</label>
                            <input className="form-control" readOnly name="email" type="text" value={this.props.form.email} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Type User:</label>
                            <input className="form-control" readOnly name="typeUser" type="text" value={this.props.form.typeUser} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange}>
                                <option value="" selected disabled hide style={{ display: 'none' }}> Select type user </option>
                                <option value="Pending"> Pending </option>
                                <option value="Authorized"> Authorized </option>
                                <option value="Unauthorized"> Unauthorized </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.props.modify(this.props.form)}> Modify </Button>
                        <Button color="danger" onClick={() => this.props.hideME()}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default UsersForm;