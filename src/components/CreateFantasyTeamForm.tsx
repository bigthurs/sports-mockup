import { useState, ChangeEvent } from 'react'

interface CreateTeamData {
    name: string
}

interface Props {
    onSubmit: (formValues: CreateTeamData) => void
}

export const CreateFantasyTeamForm = ({ onSubmit }: Props) => {
    const [ formData, setFormData ] = useState<CreateTeamData>({
        name: ''
    })
    const { name } = formData
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target
        setFormData({name: value})
    }

    return (
        <form
            onSubmit={async e => {
                e.preventDefault()
                onSubmit(formData)
            }}
        >
            <div>Create Fantasy Team</div>
            <div>
                <input
                    name="name"
                    placeholder="Team Name" 
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Create!</button>
            </div>
        </form>
    )
}