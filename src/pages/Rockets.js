import React, { useState, useEffect } from "react";
import API from "../config/api";
const Rockets = () => {
  const [state, setState] = useState();

  // prima dva parametra
  //  arrow f-ju i niz
  // prazan niz def onMounting
  // neki state u nizu, definise pozivanje arrow f-je kada se taj state promeni
  useEffect(() => {}, []);

  useEffect(() => {
    API.get("/rockets").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Rockets</h2>
      {state &&
        state.map((rocket) => (
          <h5 key={rocket.rocket_id}>{rocket.rocket_name}</h5>
        ))}
    </div>
  );
};

export default Rockets;
