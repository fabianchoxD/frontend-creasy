import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
query getProjects($filter:FilterFindManyprojectsInput){
    projectMany(filter:$filter){
      _id,
      projectName,
      budget,
      generalObjective,
      specificObjective,
      startDate,
      finishDate,
      state,
      projectPhase,
      leadership{
        identificationDocument,
        name
      }
    
    }
  }
`


export {GET_PROJECTS};