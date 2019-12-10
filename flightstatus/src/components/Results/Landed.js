import React from "react";
import moment from "moment";

export default props => {
  const { airportData, airlineData, flightData } = props;
  const { operationalTimes } = flightData;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>
          Status : <span style={{ color: "green" }}>Landed</span>
        </h3>
      </div>
      <div>
        <div>
          Arrival Time:
          {operationalTimes.actualGateArrival
            ? ` ${moment(operationalTimes.actualGateArrival.dateUtc).format(
                "LLL"
              )} (${moment(
                operationalTimes.actualGateArrival.dateUtc
              ).fromNow()})`
            : ` ${moment(operationalTimes.actualRunwayArrival.dateUtc).format(
                "LLL"
              )} (${moment(
                operationalTimes.actualRunwayArrival.dateUtc
              ).fromNow()})`}
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid gray",
          display: "flex",
          padding: 10,
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
              {airportData[airportData.length - 1].name}{" "}
              {airportData[airportData.length - 1].fs}
            </div>
            <div>
              {airportData[airportData.length - 1].city},{" "}
              {airportData[airportData.length - 1].countryName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
