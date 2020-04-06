export const filteredCountry = (payload, query) => ({
  type: "SEARCHCOUNTRY",
  payload: payload,
  query: query,
});

export const initialCountry = (payload, countryname) => ({
  type: "INITIALLOAD",
  payload: payload,
  countryName: countryname,
});
