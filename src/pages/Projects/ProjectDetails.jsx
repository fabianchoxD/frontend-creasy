import * as React from 'react';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../../styles/PDetails.css';
import { useMutation} from '@apollo/client';
import {useState} from 'react';
import {CREATE_PROJECT} from '../../graphql/projects/mutations';
import {emptyForm} from '../../miscellaneous/formValidations';
import {succesCreateProject } from '../../miscellaneous/operationsRes';

const ProjectDetails = () => {
    const [form,setForm]= useState({
        projectName: '',
        budget: '',
        generalObjective: '',
        specificObjective: '',
        startDate: '',
        finishDate: '',
        state: '',      
        projectPhase:'',
        leadership:{
            identificationDocument:'',
            name:''
        }
    })
    
    
    const [createProject] = useMutation(CREATE_PROJECT);

    const save = () => {
        
        let {projectName, budget, generalObjective, specificObjective, startDate, finishDate, projectPhase,identificationDocument,name } = form;

        if (projectName === "" || budget === "" || generalObjective === "" || 
            specificObjective === "" || startDate === "" || finishDate === "" || 
            identificationDocument === "" || name === ""
        ) {
            emptyForm();
        }
        else {
            createProject({
                variables: { record: {
                        projectName:projectName,
                        budget: parseInt(budget),
                        generalObjective:generalObjective,
                        specificObjective: specificObjective,
                        startDate:startDate,
                        finishDate:finishDate,
                        projectPhase:projectPhase,
                        leadership: {
                            identificationDocument: parseInt(identificationDocument),
                            name:name
                        }
                        
                    }
                }
            })
            succesCreateProject();
        }

    }


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        
        });
      };

        return(
            <>
                <Header/>
                
                <form className="form-details">
                    <fieldset className="fd1">
                        <legend id="leg1"> Project details </legend>
                        <p id="c1">
                            <label htmlFor="project"> Id: </label> <br />
                            <input type="text" name="project" disabled id="project" /> <br />

                            <label htmlFor="budget" style={{marginTop: '10px'}}> Budget: </label> <br />
                            <input type="number" name="budget" id="budget" onChange={handleChange} value={form.budget}/> <br />

                            <label htmlFor="general" style={{marginTop: '12px'}}> General objective: </label> <br />
                            <textarea name="generalObjective" id="general" rows="5" onChange={handleChange}value={form.generalObjective} ></textarea>  <br />

                            <label htmlFor="sDate" style={{marginTop: '2px'}}> Start date: </label> <br />

                            <input type="date" name="sDate" id="sDate"/> <br />
                            <Link to="/advances" state={{ pId: "61ab78ee04ce1b25287fd0d9" /* reemplazar el string quemado por el atributo que contenga la id del proyecto*/ }}  style={{textDecoration: 'none'}}>
                                <Button style={{
                                    marginTop: '20px',
                                    color: 'white',
                                    background: '#56B4FC',
                                    textTransform: 'inherit',
                                    marginLeft: '55px',
                                    width: '190px',
                                    height: '40px'
                                }}> 
                                    Go to advances 
                                </Button>
                            </Link>

                            //<input type="date" name="startDate" id="sDate" onChange={handleChange}value={form.startDate}/> <br />

                        </p>
                        <p id="c2">
                            <label htmlFor="pName"> Project name: </label> <br />
                            <textarea name="projectName" id="pName" rows="4" style={{height: '110px'}} onChange={handleChange}value={form.projectName}></textarea> <br />                    

                            <label htmlFor="specific" style={{marginTop: '4px'}}> Specific objective: </label> <br />
                            <textarea name="specificObjective" id="specific" rows="5" onChange={handleChange} value={form.specificObjective}></textarea> <br />                    

                            <label htmlFor="fDate" style={{marginTop: '4px'}}> Finish date: </label> <br />
                            <input type="date" name="finishDate" id="fDate" onChange={handleChange} value={form.finishDate}/> <br />
                        </p>
                    </fieldset>

                    <br /><br />
                    <fieldset className="fd2" >
                        <legend id="leg2"> Project leader data </legend>
                        <p id="c1">
                            <label htmlFor="identDoc"> Identification document: </label> <br />
                            <input type="number" name="identificationDocument" id="identDoc" onChange={handleChange} value={form.identificationDocument} /> <br />

                            <label htmlFor="nLeader" style={{marginTop: '10px'}}> Names: </label> <br />
                            <input type="text" name="name" id="nLeader" onChange={handleChange} value={form.name}/> <br />
                        </p>
                    </fieldset>

                    <br /><br />
                    <fieldset className="fd3" >
                        <legend id="leg3"> Project state </legend>
                        <p id="cs">
                            <label htmlFor="pState"> State: </label> <br />
                            <select type="text" name="state" id="pState" onChange={handleChange}value={form.state}> 
                                <option value="1"> Inactive </option>
                                <option value="2"> Active </option>
                            </select><br />

                            <label htmlFor="pPhase" style={{marginTop: '10px'}}> Project phase: </label> <br />
                            <select type="text" name="projectPhase" id="pPhase" onChange={handleChange}value={form.projectPhase}>
                                <option selected disabled hide style={{ display: 'none' }}> Select phase project </option> 
                                <option value="1"> Started </option>
                                <option value="2"> In progress </option>
                                <option value="3"> Finished </option>
                            </select><br />
                        </p>
                    </fieldset>

                   <Link to="/projects" style={{textDecoration: 'none'}}> <Button id="btn-1"> Back </Button> </Link>
                    <Button id="btn-2" onClick={()=>save()}> Save </Button>
                </form>
                       
        </>
            
        )
}

export default ProjectDetails;