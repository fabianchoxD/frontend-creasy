import { gql } from '@apollo/client';

const CREATE_USER = gql`
    mutation createUser(
        $record: CreateOneusersInput!
    ) {
        UserCreateOne(record: $record) {
            record {
                names,
                lastnames,
                identification,
                email,
                typeUser,
                state
            }
        }
    }
`

const UPDATE_USER = gql`
    mutation updateUser(
        $record: UpdateOneusersInput!, 
        $filter: FilterUpdateOneusersInput
    ) {
        UserUpdateOne(record: $record, filter: $filter) {
            record {
                names,
                lastnames,
                identification,
                email,
                typeUser,
                state
            }
        }
    }
`
const DELETE_USER = gql`
    mutation deleteUser($filter: FilterRemoveOneusersInput) {
        UserRemoveOne(filter: $filter) {
            record {
                names,
                lastnames,
                identification,
                email,
                typeUser,
                state
            }
        }
    }
`

export {CREATE_USER, UPDATE_USER, DELETE_USER};