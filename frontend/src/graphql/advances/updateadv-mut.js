import {gql} from "@apollo/client"

const UPDATE_ADV = gql `

mutation advancesUpdateById($_id: MongoID!, $record: UpdateByIdadvancesInput!){
  advancesUpdateById(_id:$_id, record:$record){
    record{
      id_project
      progressDate
   		description
   		observation
    }
    
  }
}

`

export default UPDATE_ADV