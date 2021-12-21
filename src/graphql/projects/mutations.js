import { gql } from '@apollo/client';

const CREATE_PROJECT = gql`
mutation createProject (
    $record: CreateOneprojectsInput!
    
  ) { 
    projectCreateOne (record: $record) {
      record {
        projectName,
        budget,
        generalObjective,
        specificObjective,
        startDate,
        finishDate,
        state,
        projectPhase,
        leadership {
          identificationDocument,
          name
        }
      }
    }
  } 
  `

const UPDATE_PROJECT = gql`
mutation updateProjects (
    $record:UpdateOneprojectsInput!,
    $filter:FilterUpdateOneprojectsInput
  ) {
    projectUpdateOne (record:$record, filter: $filter) {
      record {
        projectName,
        budget,
        generalObjective,
        specificObjective,
        startDate,
        finishDate,
        state,
        projectPhase,
        leadership {
          identificationDocument,
          name
        }
      }
    }
  } `

export{CREATE_PROJECT,UPDATE_PROJECT}

