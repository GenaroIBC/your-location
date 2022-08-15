import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Select } from "./Select";
import { URLs } from "../../assets/config";

export function SelectsList() {
  const [province, setProvince] = useState(null);
  const [municipality, setMunicipality] = useState(null);
  const [location, setLocation] = useState(null);

  const handleChange = (e, setter) => {
    console.log(e.target.value);
    setter(e.target.value);
  };

  return (
    <>
      <h1>Select your location</h1>
      <Select
        selectValue="provincias"
        url={URLs.provinces}
        handleChange={e => handleChange(e, setProvince)}
      />
      {province && (
        <Select
          selectValue="municipios"
          url={`${URLs.municipalities}${province}`}
          handleChange={e => handleChange(e, setMunicipality)}
        />
      )}
      {municipality && (
        <Select
          selectValue="localidades"
          url={URLs.locations + municipality}
          handleChange={e => handleChange(e, setLocation)}
        />
      )}
      <p>
        {province} - {municipality} - {location}
      </p>
    </>
  );
}
