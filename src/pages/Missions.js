import React, { useState, useEffect } from "react";
import MissionDetail from "../components/MissionDetails";
import API from "../config/api";
const Missions = () => {
  const [state, setState] = useState([]);

  // prima dva parametra
  //  arrow f-ju i niz
  // prazan niz def onMounting
  // neki state u nizu, definise pozivanje arrow f-je kada se taj state promeni
  useEffect(() => {}, []);

  useEffect(() => {
    API.get("/missions").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Missions</h2>
      {state.map((mission) => (
        <MissionDetail key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default Missions;
