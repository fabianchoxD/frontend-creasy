import * as React from 'react';
import {useState} from 'react';
import Header from '../../components/Header';
import ProjectsList from './ProjectsList';
import { succesModify } from '../../miscellaneous/operationsRes';

import {GET_PROJECTS} from '../../graphql/projects/queries'
import { useQuery, useMutation} from '@apollo/client';
import { UPDATE_PROJECT, CREATE_PROJECT } from '../../graphql/projects/mutations';

const Projects = () => { 


   //State

 //Methods
    
    
   
    /* const handleShowModalEdit = (form) => {
        setModalEdit(true);
        setForm(form);
    }

    const handleHideModalEdit = () => {
        setModalEdit(false);
    }

 //Mutation GraphQL

    const [updateProjects] = useMutation(UPDATE_PROJECT);

    const modify= (form) => {

        let {projectName,generalObjective,specificObjective,budget} = form;

        updateProjects({
            variables: {record: {budget: budget }, filter: {projectName: projectName}}
        });    

        handleHideModalEdit();
        succesModify();

    } */

//Query

    const { data, error, loading } = useQuery(GET_PROJECTS);

    if (loading) return <p> Loading... </p> 

    if (error) return <p> Error... {error.message} </p>
    console.log(data);
    return(
        <> 
        <div style={{marginBottom: '250px'}}>
                <Header/>

                <ProjectsList
                    data={data}
                    // sModalEdit={this.handleShowModalEdit}
                />

                
            </div>

        </>
    )
}

export default Projects;