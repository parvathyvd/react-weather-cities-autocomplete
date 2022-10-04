import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL } from "../../api";
import { geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    console.log("serach data", searchData);
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const result = await response.json();
    setSearch("");
    return {
      options: result.data.map((city) => {
        return {
          label: `${city.name} ${city.countryCode}`,
          value: `${city.latitude} ${city.longitude}`,
        };
      }),
    };
  };

  return (
    <AsyncPaginate
      placeholder="Search for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
