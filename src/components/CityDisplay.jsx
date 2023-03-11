import React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import axios from "axios";
import { useCities } from "../api/useCities";

export const CityDisplay = () => {
  const { selectedCity } = useCities();
  const { lat, lng } = selectedCity;

  const result = useQuery("cityData", () =>
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
      )
      .then((response) => response.data)
  );

  const status = result?.status || "";
  const cityData = result?.data || {};

  console.log("****", result, lat, lng);

  if (status === "loading") {
    return <Box>Loading...</Box>;
  }

  if (status === "success") {
    if (!cityData) {
      return <Box>currently not support</Box>;
    }
    return (
      <Box>
        <h1>Data</h1>
        <ul>
          {Object.keys(cityData).map((item, ndx) => {
            if (
              typeof cityData[item] === "string" ||
              typeof cityData[item] === "number"
            ) {
              return (
                <li key={`data-${ndx}`}>
                  {item} : {cityData[item]}
                </li>
              );
            } else {
              return (
                <li key={`data-${ndx}`}>
                  {item} : {JSON.stringify(cityData[item])}
                </li>
              );
            }
          })}
        </ul>
      </Box>
    );
  }

  return null;
};

export default CityDisplay;
