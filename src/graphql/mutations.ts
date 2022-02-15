/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFantasyTeam = /* GraphQL */ `
  mutation CreateFantasyTeam(
    $input: CreateFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    createFantasyTeam(input: $input, condition: $condition) {
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
      userTeamsId
    }
  }
`;
export const updateFantasyTeam = /* GraphQL */ `
  mutation UpdateFantasyTeam(
    $input: UpdateFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    updateFantasyTeam(input: $input, condition: $condition) {
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
      userTeamsId
    }
  }
`;
export const deleteFantasyTeam = /* GraphQL */ `
  mutation DeleteFantasyTeam(
    $input: DeleteFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    deleteFantasyTeam(input: $input, condition: $condition) {
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
      userTeamsId
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
