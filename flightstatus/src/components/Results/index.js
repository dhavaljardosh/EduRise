import React from "react";
import Active from "./Active";
import Unknown from "./Unknown";
import Landed from "./Landed";
import Scheduled from "./Scheduled";

export default props => {
  return renderBasedOnStatus(props);
};

const renderBasedOnStatus = props => {
  const { flightData, status, airportData, airlineData } = props;
  switch (status) {
    case "U":
      return <Unknown flightData={flightData} />;
    case "A":
      return (
        <Active
          flightData={flightData}
          airportData={airportData}
          airlineData={airlineData}
        />
      );
    case "L":
      return (
        <Landed
          flightData={flightData}
          airportData={airportData}
          airlineData={airlineData}
        />
      );
    case "S":
      return (
        <Scheduled
          flightData={flightData}
          airportData={airportData}
          airlineData={airlineData}
        />
      );
    default:
      return <p>Unavailable</p>;
  }
};
