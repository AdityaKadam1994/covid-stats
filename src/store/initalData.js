// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { authorization } from "../authorization";

// const InitialData = () => {
//   const [getAllStats, setAllStats] = useState([]);
//   const config = {
//     headers: authorization,
//   };
//   useEffect(() => {
//     axios
//       .get(
//         "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
//         config
//       )
//       .then((response) => {
//         console.log(response);
//         setAllStats({ allstats: response.data });
//       });
//   }, []);
//   //   return getAllStats;
// };
export const InitialData = {};
