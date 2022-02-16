import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

import { FantasyTeam } from '../types'
import { createFantasyTeam } from '../graphql/mutations'

interface Props {
    setFantasyTeams: React.Dispatch<any>,
    fantasyTeams: FantasyTeam[]
}

interface CreateTeamResponse {
    data: {
        createFantasyTeam: FantasyTeam
    }
}

interface CreateTeamData {
    name: string
}

const initialState = {
    name: ''
}

export const CreateFantasyTeamForm = ( { setFantasyTeams, fantasyTeams } : Props) => {
    const [ formData, setFormData ] = useState<CreateTeamData>(initialState)
    const { name } = formData

    //hardcode in user for now
    const currentUser = { userTeamsId: 'test'}


    const setInput = (key: string, value: string) => {
        setFormData({...formData, [key]: value})
    } 

    const addFantasyTeam = async () => {
        try {
            if (!formData.name) return
            const fantasyTeam = { ...formData, ...currentUser }
            setFormData(initialState)
            const { data: { createFantasyTeam: graphQlTeam } } = await API.graphql(graphqlOperation(createFantasyTeam, {
                input: fantasyTeam
            })) as CreateTeamResponse
            setFantasyTeams([...fantasyTeams, graphQlTeam])
        } catch (error) { console.log('error creating fantasy team: ', error)}
    }

    return (
        <form
            onSubmit={async e => {
                e.preventDefault()
                addFantasyTeam()
            }}
        >
            <div>Create Fantasy Team</div>
            <div>
                <input
                    name="name"
                    placeholder="Team Name" 
                    value={name}
                    onChange={event => setInput('name', event.target.value)}
                />
                <button type="submit">Create!</button>
            </div>
        </form>
    )
}