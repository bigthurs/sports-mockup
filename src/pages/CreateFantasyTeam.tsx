import { Connect } from 'aws-amplify-react'
import { graphqlOperation } from 'aws-amplify'
import { createFantasyTeam } from '../graphql/mutations'
import { CreateFantasyTeamForm } from '../components/CreateFantasyTeamForm'

export const CreateFantasyTeam = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <Connect mutation={graphqlOperation(createFantasyTeam)} >
                {({ mutation }: any) => (
                    <CreateFantasyTeamForm 
                        onSubmit={async input => {
                            const response = await mutation({
                                input
                            })
                            console.log(response)
                        }}
                     />
                )}       
            </Connect>

        </div>
    )

}