import * as React from 'react';
import { Link } from "react-router-dom";
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class SignInForm extends React.Component {
    render() {
        return(
            <>
                <Link to="/">
                    <IconButton 
                        style={{
                            boxShadow: 'rgb(190, 190, 190) 1px 1px 3px',
                            position: 'relative',
                            top: '85px',
                            left: '210px'
                        }} 
                        aria-label="arrow-back" 
                        size="large"
                    >
                        <ArrowBackIcon fontSize="large" style={{color: 'rgb(70, 70, 70)'}}/>
                    </IconButton>
                </Link>

                <div className="box-in">

                    <div className="info-in">
                        <h2> Hello! </h2>
                        <div style={{width: '230px', marginLeft: 'auto', marginRight: 'auto'}}>
                            <p> Enter your personal information and interact with Creasy Solutions </p>
                        </div>
                        <Link to="/signup">
                            <Button variant="outlined" id="btn-up"> Sign up </Button>
                        </Link>
                    </div>

                    <div className="form-in">

                        <h2> Sign in </h2>

                        <Form>
                            <Form.Group id="mail-in">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    E-mail
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <EmailOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="text" name='email' autoComplete="off" placeholder="E-mail" onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="pass-in">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <LockOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="password" name='password' placeholder="Password" onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>
                        </Form>

                        <Button id="btn-in" onClick={() => this.props.login()}> Sign in </Button>
                    </div>
                </div>
            </>
        )
    }
}

export default SignInForm;