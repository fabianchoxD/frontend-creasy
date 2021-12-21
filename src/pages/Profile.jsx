import * as React from 'react';
import Button from '@mui/material/Button';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from '../components/Header';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/users/mutations';
import {GET_USER} from '../graphql/users/queries';
import { useState } from 'react';
import { succesModify } from '../miscellaneous/operationsRes';
import { changeProfile } from '../miscellaneous/formValidations';

import '../styles/Profile.css';

const Profile = () => {

    // State

    const [form, setForm] = useState({
        names: '',
        lastnames: '',
        identification: '',
        email: '',
        password: ''
    });

    // Methods

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    // Query

    let id = sessionStorage.getItem('id');
    
    const { data, error, loading } = useQuery(GET_USER, {
        variables: {filter: { _id: id }}
    }); 

    // Mutation

    const [updateUser] = useMutation(UPDATE_USER);
    console.log(form);
    
    const save = () => {
        let {names, lastnames, identification, email, password} = form;

        if (names === '' && lastnames === '' && identification === '' && 
            email === '' && password === ''
        ) {
            changeProfile();
        }
        else {
            updateUser({
                variables: {
                    record: {
                        names: names === '' ? data.UserOne.names : names,
                        lastnames: lastnames === '' ? data.UserOne.lastnames : lastnames,
                        identification: identification === '' ? data.UserOne.identification : parseInt(identification),
                        email: email === '' ? data.UserOne.email : email, 
                        password: password === '' ? data.UserOne.password : password 
                    }, 
                    filter: {_id: id}
                }
            })
            succesModify();
        }
    }
    
    if (loading) return <p> Loading... </p>

    if (error) return <p> Error... {error.message} </p>
    
    return(
        
        <>
            <Header/>

            <div className="box-profile">
                <div className="form">
                    <h2> Profile </h2>

                    <Form>
                        <Form.Group id="info">
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Names
                            </Form.Label>
                            <InputGroup className="names mb-2">
                                <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" name='names' onChange={handleChange} placeholder="Names" defaultValue={data.UserOne.names}/>
                            </InputGroup>

                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Lastnames
                            </Form.Label>
                            <InputGroup className="lastnames mb-2">
                                <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" name='lastnames' onChange={handleChange} autoComplete="off" placeholder="Lastnames" defaultValue={data.UserOne.lastnames}/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group id="ident" style={{marginLeft: '54px'}}>
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Identification
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text id='icon'> <ContactMailOutlinedIcon color="action"/> </InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" name='identification' onChange={handleChange} type="number" autoComplete="off" placeholder="Identification" defaultValue={data.UserOne.identification}/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group id="mail" style={{marginLeft: '54px'}}>
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                E-mail
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text id='icon'> <EmailOutlinedIcon color="action"/> </InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" name='email' onChange={handleChange} type="email" autoComplete="off" placeholder="E-mail" defaultValue={data.UserOne.email}/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group id="pass" style={{marginLeft: '54px'}}>
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text id='icon'> <LockOutlinedIcon color="action"/> </InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" name='password' onChange={handleChange} type="text" placeholder="Password" defaultValue={data.UserOne.password}/>
                            </InputGroup>
                        </Form.Group>
                    </Form>

                    <Button id="save" onClick={() => save()}> {
                        form.names === '' && 
                        form.lastnames === '' && 
                        form.identification === '' && 
                        form.email === '' && 
                        form.password === '' ? 'Edit' : 'Save'
                    } </Button> 
                </div>
            </div>
        </>
    )
}

export default Profile;