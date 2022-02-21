import React, { useEffect, useState } from "react";
import API from "../config/api";
const Home = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    API.get("/info").then((res) => {
      console.log(res);
      setState(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>
        CEO: <strong>{state.ceo}</strong>{" "}
      </p>
      <h3>{state.summary}</h3>
    </div>
  );
};

export default Home;
