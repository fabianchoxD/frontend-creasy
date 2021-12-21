import {gql} from "@apollo/client"

const CREATE_ADVANCE = gql `
mutation advancesCreateOne($record: CreateOneadvancesInput!){
    advancesCreateOne(record:$record){
    	record{
        id_project
        progressDate
        description
        observation
        }
    }
}

`

export default CREATE_ADVANCE;