import { gql } from '@apollo/client';

const GET_USERS = gql`
    query getUsers($filter: FilterFindManyusersInput) {
        UserMany(filter: $filter) {	
            names,
            lastnames,
            identification,
            email,
            typeUser,
            state   
        }
    }
`

const GET_USER = gql`
    query getUser($filter: FilterFindOneusersInput) {
        UserOne(filter: $filter) {
            _id,
            names,
            lastnames,
            identification,
            email, 
            password
        }
    }
`

const AUTHENTICATION = gql`
    query Auth($filter: FilterFindOneusersInput) {
        UserOne(filter: $filter) {
            _id
            email,
            password,
            typeUser
        }
    }
`

export {GET_USERS, GET_USER, AUTHENTICATION};