import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API, graphqlOperation } from "aws-amplify";

import { FantasyTeam } from '../../types'
import { getFantasyTeam } from "../../graphql/queries";

interface FetchTeamResponse {
    data: {
        getFantasyTeam: FantasyTeam
    }
}

const initialState = {
    id: '',
    name: ''
}

export const FantasyTeamDetails = () => {
    const { id } = useParams()
    const [ fantasyTeam, setFantasyTeam ] = useState(initialState)

    const fetchTeam = async () => {
        const { data: { getFantasyTeam: fantasyTeam}} = await API.graphql(graphqlOperation(getFantasyTeam, {
            id
        })) as FetchTeamResponse
        return fantasyTeam
    }

    useEffect(() => {
        async function fetchOnLoad() {
            const fantasyTeam = await fetchTeam()
            setFantasyTeam(fantasyTeam)
        }

        fetchOnLoad()
    }, [])

    // const detailsList = () => {
    //     Object.entries(fantasyTeam).map((entry: any) => {
    //         return <h1>{`${entry.key}: ${entry.value}`}</h1>
    //     })
    // }

    return (
        <div>
            <p>{fantasyTeam.id}</p>
            <p>{fantasyTeam.name}</p>
            {/* {detailsList} */}
        </div>
    )
}