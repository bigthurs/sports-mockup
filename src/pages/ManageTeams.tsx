import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { listFantasyTeams } from "../graphql/queries";
import { FantasyTeamList } from "../components/FantasyTeamList";
import { CreateFantasyTeamForm } from "../components/CreateFantasyTeamForm";

export const ManageTeams = () => {
  const [fantasyTeams, setFantasyTeams] = useState([]);

  useEffect(() => {
    fetchFantasyTeams();
  }, []);

  const fetchFantasyTeams = async () => {
    try {
      const {
        data: {
          listFantasyTeams: { items: fantasyTeams },
        },
      } = (await API.graphql(graphqlOperation(listFantasyTeams))) as any; //Get rid of this but it doesnt like the type below
      console.log({fantasyTeams})
      setFantasyTeams(fantasyTeams);
    } catch (error) {
      console.log("error fetching fantasy teams: ", error);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <CreateFantasyTeamForm
        setFantasyTeams={setFantasyTeams}
        fantasyTeams={fantasyTeams}
      />
      {!fantasyTeams ? null : <FantasyTeamList fantasyTeams={fantasyTeams} />}
    </div>
  );
};
