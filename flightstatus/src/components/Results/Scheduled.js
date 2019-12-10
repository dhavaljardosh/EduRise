import React from "react";
import moment from "moment";

export default props => {
  const { airportData, airlineData, flightData } = props;
  const { operationalTimes } = flightData;
  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>
            Status : <span style={{ color: "green" }}>Scheduled</span>
          </h3>
          <h4 style={{ marginLeft: 30 }}>Carrier : {airlineData.name}</h4>
        </div>
      </div>
      <div>
        <div>Status : Scheduled</div>
        <div>
          Take off time:{" "}
          {moment(operationalTimes.scheduledGateDeparture.dateLocal).format(
            "LLL"
          )}{" "}
          ({moment(operationalTimes.scheduledGateDeparture.dateUtc).fromNow()})
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid gray",
          padding: 10,
          display: "flex",
          marginTop: 10
        }}
      >
        <div style={{ flex: 1 }}>
          <h4 style={{ color: "green" }}>Arrival</h4>
          <div>
            <div>
              {airportData[0].name} {airportData[0].fs}
            </div>
            <div>
              {airportData[0].city}, {airportData[0].countryName}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ color: "red" }}>Departure</h4>
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
    </div>
  );
};
