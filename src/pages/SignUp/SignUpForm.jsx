import * as React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class SignUpForm extends React.Component {
    render() {
        return(
            <>
                <Link to="/">
                    <IconButton 
                        style={{
                            boxShadow: 'rgb(190, 190, 190) 1px 1px 3px',
                            position: 'relative',
                            top: '60px',
                            left: '160px'
                        }} 
                        aria-label="arrow-back" 
                        size="large"
                    >
                        <ArrowBackIcon fontSize="large" style={{color: 'rgb(70, 70, 70)'}}/>
                    </IconButton>
                </Link>

                <div className="box">
                    <div className="form">
                        <h2> Create Account </h2>

                        <Form>
                            <Form.Group id="info">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Names
                                </Form.Label>
                                <InputGroup className="names mb-2">
                                    <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" autoComplete="off" placeholder="Names" name='names' onChange={this.props.handleChange}/>
                                </InputGroup>

                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Lastnames
                                </Form.Label>
                                <InputGroup className="lastnames mb-2">
                                    <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" autoComplete="off" placeholder="Lastnames" name='lastnames' onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="ident">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Identification
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <ContactMailOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="number" autoComplete="off" placeholder="Identification" name='identification' onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="mail">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    E-mail
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <EmailOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="email" autoComplete="off" placeholder="E-mail" name='email' onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="pass">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <LockOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="password" placeholder="Password" name='password' onChange={this.props.handleChange}/>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="select">
                                <ArrowForwardIosIcon fontSize="small" color="action" id="arrow"/>
                                <Form.Select aria-label="Default select example" id="fs" name='typeUser' onChange={this.props.handleChange}>
                                    <option selected disabled hide style={{ display: 'none' }}> Select type user </option>
                                    <option style={{background:'white'}} value="Student">Student</option>
                                    <option style={{background:'white'}} value="Leader">Leader</option>
                                    <option style={{background:'white'}} value="Administrator">Administrator</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <Button id="btn-up" onClick={() => this.props.save(this.props.form)}> Sign up </Button>
                    </div>

                    <div className="info">
                        <h2> Welcome! </h2>
                        <div style={{width: '270px', marginLeft: 'auto', marginRight: 'auto'}}>
                            <p> If you already have an account, please login with your personal information </p>
                        </div>
                        <Link to="/signin">
                            <Button variant="outlined" id="btn-in"> Sign in </Button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
export default SignUpForm;