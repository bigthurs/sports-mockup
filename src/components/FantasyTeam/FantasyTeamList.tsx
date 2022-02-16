import { FantasyTeam } from '../../types'

interface Props {
    fantasyTeams: FantasyTeam[]
}

export const FantasyTeamList = ({ fantasyTeams } : Props) => {
    return (
        <div>
            {
                fantasyTeams.map((fantasyTeam: FantasyTeam) => (
                        <div key={fantasyTeam.id}>{fantasyTeam.name}</div>    
                    ))
            }
        </div>
    );
};