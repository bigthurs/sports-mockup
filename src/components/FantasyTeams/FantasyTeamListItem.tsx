import React from 'react';
import { FantasyTeam } from '../../types'
import { Link } from 'react-router-dom'

interface Props {
    fantasyTeam: FantasyTeam
}

export const FantasyTeamListItem = ({fantasyTeam: { id, name }}: Props) => {
    return (
        <div key={id}>
            {name}
                <Link to={`/fantasyTeam/${id}`} style={{ fontSize: 8 }}>see details</Link>
        </div>
    );
};