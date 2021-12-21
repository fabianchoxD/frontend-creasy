import {gql} from "@apollo/client"

const GET_ADVANCES = gql `
  query busqueda_avances(
  $filter: FilterFindManyadvancesInput){
  advancesMany(filter: $filter){
        _id
        id_project
        progressDate
        description
        observation
      }
    }
`

const FIND_PROJECT = gql`
  query projectfindId ($_id : MongoID!) {
    projectById (_id:$_id){
      _id
      projectName
    }
  }
`

export {GET_ADVANCES, FIND_PROJECT}