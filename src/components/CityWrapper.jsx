import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useCities } from "../api/useCities";
import { CityDisplay } from "./CityDisplay";
import { CityForm } from "./CityForm";
import { cityList } from "../constants";

export const CityWrapper = () => {
  const { cities, setCities } = useCities();

  useQuery("cityDataInit", () => setCities(cityList || []));

  return cities.length ? (
    <Fragment>
      <CityForm />
      <CityDisplay />
    </Fragment>
  ) : null;
};

export default CityWrapper;
