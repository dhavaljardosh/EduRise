import React, { useState } from "react";
import { Select } from "antd";
import { InputNumber } from "antd";
import { DatePicker } from "antd";
import { Button } from "antd";
import Results from "../Results";

export const Search = () => {
  const { Option } = Select;
  const [carrier, setCarrier] = useState("");
  const [flightNumber, setFlightNumber] = useState(0);
  const [date, setDate] = useState("");
  const [confirmed, setConfirmed] = useState({});

  const onChange = value => {
    // console.log(`selected ${value}`);
    setCarrier(value);
  };

  const onChangeDate = (date, dateString) => {
    // console.log(dateString);
    setDate(dateString);
  };

  const onSearchClick = () => {
    // setConfirmed({
    //   carrier,
    //   flightNumber,
    //   date
    // });
    if (!carrier || !flightNumber || !date) {
      alert("Carrier, flightNumber and Date is required");
      return;
    }

    let formattedDate = date.replace("-", "/");
    formattedDate = formattedDate.replace("-", "/");
    console.log(formattedDate);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/dep/${formattedDate}`,
      {
        method: "GET",
        headers: {
          appId: "06a45e66",
          appKey: "291f513576814a1cdb36e0ef38213ba9"
        }
      }
    )
      .then(data => data.json())
      .then(finalData => {
        console.log(finalData);
        setConfirmed(finalData);
      });

    // const finalData = await res.json();
  };

  const onFlightNumChange = value => {
    setFlightNumber(value);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <div style={style.box}>
        <div style={{ marginLeft: 10, fontSize: 20 }}>Check Flight Status</div>
        <div style={style.searchBox}>
          <div style={style.marginOfSearchBox}>
            <h3>Airline</h3>
            <Select
              showSearch
              style={{
                width: 200,
                marginBottom: 10
              }}
              placeholder="Select Airline"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children.props.children[1].props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="EK">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>Emirates</div>
                </div>
              </Option>
              <Option value="EY">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://discover.film/wp-content/uploads/2018/03/etihad-airlines-short-films.jpg"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>Eithid</div>
                </div>
              </Option>
              <Option value="QR">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 15 }}>
                    <img
                      src="https://prague.tv/images/customer/logo/Qatar-Airways-Logo_gallery-big.png"
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <div style={{ fontSize: 18 }}>Qatar</div>
                </div>
              </Option>
            </Select>
          </div>
          <div style={style.marginOfSearchBox}>
            <h3>Flight #</h3>
            <InputNumber defaultValue={3} onChange={onFlightNumChange} />
          </div>

          <div style={style.marginOfSearchBox}>
            <h3>Select Date</h3>
            <DatePicker onChange={onChangeDate} />
          </div>
        </div>
        <Button
          type="primary"
          icon="search"
          onClick={onSearchClick}
          style={{ marginLeft: 10 }}
        >
          Search
        </Button>
      </div>
      {confirmed.flightStatuses && (
        <div>
          <div style={style.resultBox}>
            <h2>Search Results</h2>
            {confirmed.flightStatuses && confirmed.flightStatuses.length > 0 ? (
              <Results
                status={confirmed.flightStatuses[0].status}
                flightData={confirmed.flightStatuses[0]}
                airportData={
                  confirmed.appendix && confirmed.appendix.airports
                    ? confirmed.appendix.airports
                    : ""
                }
                airlineData={
                  confirmed.appendix && confirmed.appendix.airlines
                    ? confirmed.appendix.airlines[0]
                    : ""
                }
              />
            ) : (
              ""
            )}
            {confirmed.flightStatuses &&
            confirmed.flightStatuses.length == 0 ? (
              <p>No Flight Status Found</p>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const style = {
  resultBox: {
    borderRadius: 10,
    boxShadow:
      "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: 600,
    marginTop: 10
  },
  box: {
    borderRadius: 10,
    boxShadow:
      "0px 1px 2px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
    backgroundColor: "white",
    padding: 20,
    margin: "auto",
    width: 600
  },
  mainHeader: {},
  searchBox: {
    display: "flex"
  },
  marginOfSearchBox: {
    margin: 10
  }
};
