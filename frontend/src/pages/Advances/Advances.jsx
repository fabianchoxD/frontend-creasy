import * as React from 'react';
import Header from '../../components/Header';
import AdvancesList from './AdvancesList';
import { GET_ADVANCES } from '../../graphql/advances/queries'
import { useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom";

const Advances = () => {


    const location = useLocation();

    const projectId = location.state.pId;

    const { loading, error, data } = useQuery(GET_ADVANCES, {
        variables: { filter: { id_project: projectId } }
    });

    if (loading) return <p> Loading... </p>


    if (error) return <p> Error... {error.message} </p>

    const filtered = data.advancesMany;

    return (
        <>
            <div style={{ marginBottom: '250px' }}>
                <Header />

                <AdvancesList
                    filtered={filtered}
                    projectId={projectId}
                />
            </div>
        </>
    )

}

export default Advances;