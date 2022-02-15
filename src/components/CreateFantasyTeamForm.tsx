import { useState } from 'react'

interface CreateTeamData {
    teamName: string
}

interface Props {
    onSubmit: (formValues: CreateTeamData) => void
}

export const CreateFantasyTeamForm = ({onSubmit}: Props) => {
    const [createTeamData, setcreateTeamData] = useState({
        teamName: ''
    })
    const { teamName } = createTeamData
    const handleChange = ({target}: any) => {
        const { teamName, value } = target
        setcreateTeamData({ [teamName]: value } as any)
    }

    return (
        <form
            onSubmit={async e => {
                e.preventDefault()
                onSubmit(createTeamData)
            }}
        >
            Create Fantasy Team
            <input
                name="teamName"
                placeholder="Team Name" 
                value={teamName}
                onChange={handleChange}
            />
            <button type="submit">save</button>
        </form>
    )
}