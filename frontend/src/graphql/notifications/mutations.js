import { gql } from '@apollo/client';

const UPDATE_INSCRIPTIONS_ID = gql`
  mutation UpdateInscriptions ($id: MongoID!, $record:UpdateByIdinscriptionsInput!){
    inscriptionUpdateById (_id: $id, record: $record){
      record{
        state
      }
    }
  }
`

const DELETE_INSCRIPTIONS_ID = gql`
mutation DeleteInscription ($id: MongoID!) {
  inscriptionRemoveById (_id: $id){
    record{
      id_student
    }
  }
}
`

export {UPDATE_INSCRIPTIONS_ID, DELETE_INSCRIPTIONS_ID};