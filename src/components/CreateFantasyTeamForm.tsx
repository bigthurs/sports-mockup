import { useState } from 'react'

interface State {
    teamName: string
}

interface Props {
    onSubmit: (formValues: State) => void
}

export const CreateFantasyTeamForm = ({onSubmit}: Props) => {
    const [teamName, setteamName] = useState('')
    const handleChange = ({target}: any) => {
        const { teamName, value } = target
        setteamName({ [teamName]: value } as any)
    }

    return (
        <form
            onSubmit={async e => {
                e.preventDefault()
                onSubmit({teamName})
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