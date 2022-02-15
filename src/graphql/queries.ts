/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFantasyTeam = /* GraphQL */ `
  query GetFantasyTeam($id: ID!) {
    getFantasyTeam(id: $id) {
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
export const listFantasyTeams = /* GraphQL */ `
  query ListFantasyTeams(
    $filter: ModelFantasyTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFantasyTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
        userTeamsId
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        team {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        fantasyTeamPlayersId
        teamPlayersId
      }
      nextToken
    }
  }
`;
