import { gql } from '@apollo/client';

const GET_NOTIFICATIONS = gql`
query getInscriptions ($filter:FilterFindManyinscriptionsInput) {
    inscriptionMany (filter: $filter){
      _id,
      id_project,
      id_student,
      state,
      entryDate,
      egressDate,
      updated_at,
      created_at
    }
  }
`
const FIND_USER_ID = gql`
    query userfindId ($id:MongoID!) {
    UserById (_id:$id){
      _id
      names
      lastnames
    }
  }
`
const FIND_PROJECT_ID = gql`
    query projectfindId ($id:MongoID!) {
    projectById (_id:$id){
      _id
      projectName
    }
  }
`

export {GET_NOTIFICATIONS, FIND_USER_ID, FIND_PROJECT_ID};