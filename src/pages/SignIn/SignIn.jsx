import * as React from "react";
import SignInForm from "./SignInForm";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AUTHENTICATION } from '../../graphql/users/queries';
import { succesLogin, errorLogin } from "../../miscellaneous/operationsRes";
import { emptyForm } from '../../miscellaneous/formValidations';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/SignIn.css';

const SignIn = () => {
    
    //State

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    //Methods

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    //QUERY

    let { email, password } = form;

    const {data, error} = useQuery(AUTHENTICATION,{
        variables: { filter: { email: email, password: password } }
    });

    const login = () => {
        if (email === '' || password === '' ) {
            emptyForm();
        }
        else if (data.UserOne === null) {
            errorLogin();
        }
        else { 
            sessionStorage.setItem('token', true);
            sessionStorage.setItem('typeUser', data.UserOne.typeUser);
            sessionStorage.setItem('id', data.UserOne._id); 
            succesLogin();       
        }
    }

    if (error) return <p> Error... {error.message} </p>

    return (
        <>
            <SignInForm
                form={form}
                handleChange={handleChange}
                login={login}
            />
        </>            
    )
}

export default SignIn;