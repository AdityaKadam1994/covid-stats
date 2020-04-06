import React, { useMemo } from "react";

const StateTable = props => {
  const storeData = useMemo(() => props.stateData, [props.stateData]);
  const filteredData = storeData.filter(
    (item, index) => item.state !== "Total"
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>State</td>
            <td>Active</td>
            <td>Confirmed</td>
            <td>Deaths</td>
            <td>Recovered</td>
          </tr>
        </thead>
        <tbody>
          {filteredData
            ? filteredData.map(dt => (
                <tr key={dt.state}>
                  <td>{dt.state}</td>
                  <td>{dt.active}</td>
                  <td>{dt.confirmed}</td>
                  <td>{dt.deaths}</td>
                  <td>{dt.recovered}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default StateTable;
