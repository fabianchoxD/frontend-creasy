import * as React from 'react';
import {useState} from 'react';
import { useMutation } from '@apollo/client';
import { emptyForm } from '../../miscellaneous/formValidations';
import { succesCreate } from '../../miscellaneous/operationsRes';
import { CREATE_USER } from '../../graphql/users/mutations';
import SignUpForm from './SignUpForm';

import '../../styles/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp = () => {
    
    //State

    const [form, setForm] = useState({
        names: '',
        lastnames: '',
        identification: '',
        email: '',
        password: '',
        typeUser: ''
    });

    //Methods

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    //Mutations GraphQL

    const [createUser] = useMutation(CREATE_USER);

    const save = (datas) => {
        
        let {names, lastnames, identification, email, password, typeUser} = datas;

        if (names === "" || lastnames === "" || identification === "" || 
            email === "" || password === "" || typeUser === ""
        ) {
            emptyForm();
        }
        else {
            createUser({
                variables: { record: {
                        names: names, 
                        lastnames: lastnames,
                        identification: parseInt(identification),
                        email: email,
                        password: password,
                        typeUser: typeUser
                    }
                }
            })
            succesCreate();
        }

    }
    
    return (
        <>
            <SignUpForm
                save={save}
                form={form}
                handleChange={handleChange}
            />
        </>
    )
}

export default SignUp;