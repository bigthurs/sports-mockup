import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'

import { listFantasyTeams } from '../graphql/queries'


export const FantasyTeamList = () => {
    const [ fantasyTeams, setFantasyTeams ] = useState([])

    useEffect(() => {
        fetchFantasyTeams()
    }, [])

    const fetchFantasyTeams = async () => {
        try {
            const fantasyTeamsData = await API.graphql(graphqlOperation(listFantasyTeams)) as any //Get rid of this but it doesnt like the type below
            console.log({fantasyTeamsData})
            const fantasyTeams = fantasyTeamsData.data.listFantasyTeams.items
            setFantasyTeams(fantasyTeams)
        } catch (error) { console.log('error fetching fantasy teams')}
    }

    return (
        <div>
            {
                fantasyTeams.map((fantasyTeam: any) => (
                        <div key={fantasyTeam.id}>{fantasyTeam.name}</div>    
                    ))
            }
        </div>
    );
};