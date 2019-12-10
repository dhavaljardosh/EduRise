import React from "react";
import moment from "moment";

export default ({ flightData, airportData, airlineData }) => {
  const { operationalTimes } = flightData;
  const { estimatedGateArrival } = operationalTimes;
  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>
            Status : <span style={{ color: "green" }}>In Air</span>
          </h3>
        </div>
      </div>
      <div>
        <div>
          Time To Land: {moment(estimatedGateArrival.dateUtc).fromNow()} (
          {moment(estimatedGateArrival.dateLocal).format("LLL")})
        </div>
      </div>
      <div>
        <h4>Arrival</h4>
        <div>
          <div>
            {airportData[0].name} {airportData[0].fs}
          </div>
          <div>
            {airportData[0].city}, {airportData[0].countryName}
          </div>
        </div>
      </div>
      <div>
        <h4>Departure</h4>
        <div>
          <div>
            {airportData[1].name} {airportData[1].fs}
          </div>
          <div>
            {airportData[1].city}, {airportData[1].countryName}
          </div>
        </div>
      </div>
    </div>
  );
};
