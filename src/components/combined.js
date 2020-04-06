import React, { useState, useEffect } from "react";

import axios from "axios";
import StateTable from "./stateTable";

const Combined = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    console.log("render");
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      setStats(response.data.statewise);
      //   console.log(stats[0]);
    });
  }, []);

  return (
    <div>
      <h1>India COVID-19 Stats</h1>
      <div className="stats-wrapper">
        <div>
          <h2>Active</h2>
          <h3>{stats[0] ? stats[0].active : "-"} </h3>
        </div>
        <div>
          <h2>Confirmed</h2>
          <h3>{stats[0] ? stats[0].confirmed : "-"} </h3>
        </div>
        <div>
          <h2>Deaths</h2>
          <h3>{stats[0] ? stats[0].deaths : "-"}</h3>
        </div>
        <div>
          <h2>Recovered</h2>
          <h3>{stats[0] ? stats[0].recovered : "-"}</h3>
        </div>
      </div>
      <StateTable stateData={stats} />
    </div>
  );
};

export default Combined;
