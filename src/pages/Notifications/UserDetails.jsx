import React from 'react';
import { useQuery } from "@apollo/client";
import {FIND_USER_ID} from '../../graphql/notifications/queries';



const UserDetails = ( id ) => {
  const { data } =  useQuery(FIND_USER_ID, { variables: { id }});

  if (data && data.UserById) {
    const { UserById: { names, lastnames}} = data;
    return names+' '+lastnames;
  }

  return null;
}

export default UserDetails;