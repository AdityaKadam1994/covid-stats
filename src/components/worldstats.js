import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authorization } from "../authorization";
import { initialCountry, filteredCountry } from "../store/actions";

const WorldStats = () => {
  const [worldStats, setWorldStats] = useState({});
  const [search, setSearch] = useState("");
  const singleStat = useSelector((state) => state.allstats);
  const dispatch = useDispatch();

  let countryData = singleStat;
  let countryName = useRef(null);

  const config = {
    headers: authorization,
  };
  useEffect(() => {
    let lat, lon;
    //Geolocation
    const Geolocation = () => {
      const showposition = (position) => {
        lat = position.coords.latitude.toString();
        lon = position.coords.longitude.toString();
        axios
          .get(`https://geocode.xyz/${lat},${lon}?json=1`)
          .then((response) => {
            countryName.current = response.data.country;
            getCountryData(null, countryName.current);
          });
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
    Geolocation();
    getCountryData();

    //Starting World Stats
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        config
      )
      .then((response) => {
        setWorldStats(response.data);
      });
  }, []);

  //On Form Submit
  const submitHandler = (e) => {
    e.preventDefault();
    getCountryData(search);
  };

  //Filtered Data
  const getCountryData = (query, countryName) => {
    const searchQuery = query;
    const countryname = countryName;
    axios
      .get(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        config
      )
      .then((response) => {
        searchQuery
          ? dispatch(filteredCountry(response.data, searchQuery))
          : dispatch(initialCountry(response.data, countryname));
      });
  };

  return (
    <div>
      <h1>World Stats</h1>
      <div className="stats-wrapper world-stats">
        <div>
          <h2>Total Cases</h2>
          <h3>{worldStats ? worldStats.total_cases : "-"} </h3>
        </div>
        <div>
          <h2>Total Deaths</h2>
          <h3>{worldStats ? worldStats.total_deaths : "-"} </h3>
        </div>
        <div>
          <h2>Total Recovered</h2>
          <h3>{worldStats ? worldStats.total_recovered : "-"} </h3>
        </div>
      </div>
      <div className="searchbar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your country..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="search-results">
        {countryData ? (
          countryData.allstats.map((ct) => (
            <div className="country-stats" key={ct.country_name}>
              <h2>{ct.country_name}</h2>
              <h3>Total Cases: {ct.cases}</h3>
              <h3>Active Cases: {ct.active_cases}</h3>
              <h3>Total Deaths: {ct.deaths}</h3>
              <h3>Recovered: {ct.total_recovered}</h3>
            </div>
          ))
        ) : (
          <p>Country Not Found</p>
        )}
      </div>
    </div>
  );
};
export default WorldStats;
