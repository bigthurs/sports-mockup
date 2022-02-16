import { useEffect, useState } from "react";
import { API } from "aws-amplify";

import { listFantasyTeams } from "../graphql/queries";
import { FantasyTeamList } from "../components/FantasyTeams/FantasyTeamList";
import { CreateFantasyTeamForm } from "../components/FantasyTeams/CreateFantasyTeamForm";

const currentUser = {
    id: 'test'
}

export const ManageTeams = () => {
  const [usersTeams, setUsersTeams] = useState([]);

  useEffect(() => {
    fetchUsersTeams();
  }, []);

  const fetchUsersTeams = async () => {
      const filter = {
        userTeamsId: {
            eq: currentUser.id
        }
      }
    try {
      const {
        data: {
          listFantasyTeams: { items: usersTeams },
        },
      } = (await API.graphql({ query: listFantasyTeams, variables: { filter: filter}})) as any; //Get rid of this but it doesnt like the type below
      setUsersTeams(usersTeams);
    } catch (error) {
      console.log("error fetching fantasy teams: ", error);
    }
  };
  return (
      <>
        <div style={{ textAlign: "center" }}>
            <CreateFantasyTeamForm
                setUsersTeams={setUsersTeams}
                usersTeams={usersTeams}
            />
            {!usersTeams ? null : <FantasyTeamList fantasyTeams={usersTeams} />}
        </div>

      </>
  );
};
