/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          userTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          userTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          userTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFantasyTeam = /* GraphQL */ `
  subscription OnCreateFantasyTeam {
    onCreateFantasyTeam {
      id
      name
      user {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTeamsId
    }
  }
`;
export const onUpdateFantasyTeam = /* GraphQL */ `
  subscription OnUpdateFantasyTeam {
    onUpdateFantasyTeam {
      id
      name
      user {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTeamsId
    }
  }
`;
export const onDeleteFantasyTeam = /* GraphQL */ `
  subscription OnDeleteFantasyTeam {
    onDeleteFantasyTeam {
      id
      name
      user {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTeamsId
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      players {
        items {
          id
          name
          createdAt
          updatedAt
          fantasyTeamPlayersId
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      name
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantasyTeamPlayersId
      teamPlayersId
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      name
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantasyTeamPlayersId
      teamPlayersId
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      name
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantasyTeamPlayersId
      teamPlayersId
    }
  }
`;
