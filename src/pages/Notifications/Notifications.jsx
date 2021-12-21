import * as React from 'react';
import Header from '../../components/Header';
import NotificationsList from './NotificationsList';
import NotificationsForm from './NotificationsForm';
import {GET_NOTIFICATIONS} from '../../graphql/notifications/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';


const Notifications = () => {

    const [modalEdit, setModalEdit] = useState(false);
    const [id, setID] = useState('');
    const [student, setStudent] = useState('');
    const [project, setProject] = useState('');
    const [entrydate, setEdate] = useState('');
    const [egressdate, setEgdate] = useState('');
    const [state, setState] = useState('');
    const handleShowModalEdit = ($i,$s,$p,$ed,$gd,$st) => {
        console.log($i,$s);
        setModalEdit({modalEdit: true})
        setID({id: $i})
        setStudent({student: $s})
        setProject({project: $p})
        setEdate({entrydate: $ed})
        setEgdate({egressdate: $gd})
        setState({state: $st})
    }
    const handleHideModalEdit = () => {
        setModalEdit({modalEdit: false})
    }

    const handleChange = (e) => {
        setModalEdit({    
            [e.target.name]: e.target.value
        })
    }

    const { data, error, loading } = useQuery(GET_NOTIFICATIONS);

    if (loading) return <p> Loading... </p> 

    if (error) return <p> Error... {error.message} </p>
    console.log(data);
    return(
        <> 
        <div style={{marginBottom: '250px'}}>
                <Header/>

                <NotificationsList
                    data={data}
                    sModalEdit={handleShowModalEdit}
                />
                <NotificationsForm
                    //data={data}
                    id={id}
                    student={student}
                    project={project}
                    entrydate={entrydate}
                    egressdate={egressdate}
                    state={state}
                    showEdit={modalEdit}
                    hModalEdit={handleHideModalEdit}
                    handleChange={handleChange}
                />

            </div>
        </>
    )
}

export default Notifications;