const BASE_URL = "https://apis.datos.gob.ar/georef/api";

export const URLs = {
  provinces: `${BASE_URL}/provincias?campos=id,nombre`,
  municipalities: `${BASE_URL}/municipios?campos=id,nombre&max=100&provincia=`,
  locations: `${BASE_URL}/localidades?municipio=`,
};
