import React, { useState, useEffect } from "react";

import axios from "axios";
import StateTable from "./stateTable";

const Combined = () => {
  const [stats, setStats] = useState([]);
  const [totalCases, setTotalCases] = useState(0);

  useEffect(() => {
    let finalStateData;
    // Total Test Cases
    axios
      .get("https://api.covid19india.org/state_test_data.json")
      .then((response) => {
        let filterStateTest = response.data.states_tested_data.map((item) => {
          let formatdate = item.updatedon;
          let DateArray = formatdate.split("/");
          [DateArray[0], DateArray[1]] = [DateArray[1], DateArray[0]];
          let finalDate = DateArray.join("/");
          return { ...item, updatedon: finalDate };
        });

        //Getting latest total cases tests
        let stateWiseTest = filterStateTest
          .reverse()
          .filter(
            (item, index, self) =>
              index ===
              self.findIndex(
                (t) => t.state === item.state && t.totaltested !== ""
              )
          );

        //Setting total tested cases to 0 for the state where there are no case tested
        let filteredCases = stateWiseTest.map((item) => {
          return parseInt(item.totaltested !== "" ? item.totaltested : 0);
        });
        //Overall Country Tests
        let totalNoOfCases = filteredCases.reduce((accu, sum) => {
          return accu + sum;
        }, 0);
        setTotalCases(totalNoOfCases);

        //Getting State wise data plus adding latest totalcase tested to every state
        axios.get("https://api.covid19india.org/data.json").then((response) => {
          finalStateData = response.data.statewise;
          for (let i = 0; i < finalStateData.length; i++) {
            for (let j = 0; j < stateWiseTest.length; j++) {
              if (finalStateData[i].state === stateWiseTest[j].state) {
                finalStateData[i].totaltested = stateWiseTest[j].totaltested;
              }
            }
          }
          setStats(finalStateData);
        });
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
        <div>
          <h2>Total Tests</h2>
          <h3>{totalCases}</h3>
        </div>
      </div>
      <StateTable stateData={stats} />
    </div>
  );
};

export default Combined;
