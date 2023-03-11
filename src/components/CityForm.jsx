import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { useCities } from "../api/useCities";
import { cityList } from "../constants";
import { debounce } from "../lib/debounce";

export const CityForm = () => {
  const { setSelectedCity, selectedCity } = useCities();

  const handleSelectedCity = (event) => {
    debounce(() => setSelectedCity(event.target.value), 500);
  };

  return (
    <Box>
      <Select
        labelId="city-label"
        id="City"
        value={selectedCity}
        label="City"
        onChange={(event) => handleSelectedCity(event)}
      >
        {cityList.map((city, ndx) => {
          return (
            <MenuItem key={`city-${ndx}`} value={city}>
              {city.city}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default CityForm;
