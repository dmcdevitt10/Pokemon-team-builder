import React, { useContext, useMemo } from "react";
import GlobalContext from "../state/GlobalContext";
import TeamCard from "../components/TeamCard";

const TeamScreen = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const displayTeam = useMemo(() => {
    return state.team.map((p, index) => {
      return <TeamCard pokemon={p} index={index}/>
    });
  }, [state.team]);

  return (
    <div>
      <h1>My Team</h1>
      {displayTeam}
    </div>
  );
};

export default TeamScreen;
