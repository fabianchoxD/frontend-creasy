import React from 'react';
import { useQuery } from "@apollo/client";
import { FIND_PROJECT_ID } from '../../graphql/notifications/queries';

export const ProjectDetails = ( id ) => {
  const { data } =  useQuery(FIND_PROJECT_ID, { variables: { id }});

  if (data && data.projectById) {
    const { projectById: { projectName}} = data;
    return projectName;
  }

  return null;
}

export default ProjectDetails;