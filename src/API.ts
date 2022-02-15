/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  teams?: ModelFantasyTeamConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFantasyTeamConnection = {
  __typename: "ModelFantasyTeamConnection",
  items:  Array<FantasyTeam | null >,
  nextToken?: string | null,
};

export type FantasyTeam = {
  __typename: "FantasyTeam",
  id: string,
  name: string,
  players?: ModelPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
  userTeamsId?: string | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  fantasyTeamPlayersId?: string | null,
  teamPlayersId?: string | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  players?: ModelPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateFantasyTeamInput = {
  id?: string | null,
  name: string,
  userTeamsId?: string | null,
};

export type ModelFantasyTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFantasyTeamConditionInput | null > | null,
  or?: Array< ModelFantasyTeamConditionInput | null > | null,
  not?: ModelFantasyTeamConditionInput | null,
  userTeamsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFantasyTeamInput = {
  id: string,
  name?: string | null,
  userTeamsId?: string | null,
};

export type DeleteFantasyTeamInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  fantasyTeamPlayersId?: string | null,
  teamPlayersId?: string | null,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
  fantasyTeamPlayersId?: ModelIDInput | null,
  teamPlayersId?: ModelIDInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  fantasyTeamPlayersId?: string | null,
  teamPlayersId?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelFantasyTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFantasyTeamFilterInput | null > | null,
  or?: Array< ModelFantasyTeamFilterInput | null > | null,
  not?: ModelFantasyTeamFilterInput | null,
  userTeamsId?: ModelIDInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
  fantasyTeamPlayersId?: ModelIDInput | null,
  teamPlayersId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFantasyTeamMutationVariables = {
  input: CreateFantasyTeamInput,
  condition?: ModelFantasyTeamConditionInput | null,
};

export type CreateFantasyTeamMutation = {
  createFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type UpdateFantasyTeamMutationVariables = {
  input: UpdateFantasyTeamInput,
  condition?: ModelFantasyTeamConditionInput | null,
};

export type UpdateFantasyTeamMutation = {
  updateFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type DeleteFantasyTeamMutationVariables = {
  input: DeleteFantasyTeamInput,
  condition?: ModelFantasyTeamConditionInput | null,
};

export type DeleteFantasyTeamMutation = {
  deleteFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      teams?:  {
        __typename: "ModelFantasyTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFantasyTeamQueryVariables = {
  id: string,
};

export type GetFantasyTeamQuery = {
  getFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type ListFantasyTeamsQueryVariables = {
  filter?: ModelFantasyTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFantasyTeamsQuery = {
  listFantasyTeams?:  {
    __typename: "ModelFantasyTeamConnection",
    items:  Array< {
      __typename: "FantasyTeam",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userTeamsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantasyTeamPlayersId?: string | null,
      teamPlayersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    teams?:  {
      __typename: "ModelFantasyTeamConnection",
      items:  Array< {
        __typename: "FantasyTeam",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFantasyTeamSubscription = {
  onCreateFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type OnUpdateFantasyTeamSubscription = {
  onUpdateFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type OnDeleteFantasyTeamSubscription = {
  onDeleteFantasyTeam?:  {
    __typename: "FantasyTeam",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userTeamsId?: string | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        fantasyTeamPlayersId?: string | null,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantasyTeamPlayersId?: string | null,
    teamPlayersId?: string | null,
  } | null,
};
