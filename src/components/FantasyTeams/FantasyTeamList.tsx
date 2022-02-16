import { FantasyTeam } from '../../types'
import { FantasyTeamListItem } from './FantasyTeamListItem'

interface Props {
    fantasyTeams: FantasyTeam[]
}

export const FantasyTeamList = ({ fantasyTeams } : Props) => {
    return (
        <div>
            {
                fantasyTeams.map((fantasyTeam: FantasyTeam) => (
                        <FantasyTeamListItem fantasyTeam={fantasyTeam}/>    
                    ))
            }
        </div>
    );
};