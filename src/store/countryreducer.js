export const countryReducer = (state = null, action) => {
  switch (action.type) {
    case "INITIALLOAD":
      const twocountries = action.payload.countries_stat.filter(
        (item, index) => {
          if (index > 0 && index < 3) {
            return item;
          }
        }
      );
      const initialCountry = action.payload.countries_stat.filter(
        (item, index) => {
          if (item.country_name == action.countryName) {
            return item;
          }
        }
      );
      console.log(initialCountry);
      return { ...state, allstats: [...initialCountry, ...twocountries] };
      break;
    case "SEARCHCOUNTRY":
      const filtercountry = action.payload.countries_stat.filter(
        (item) => item.country_name == action.query
      );
      return { ...state, allstats: filtercountry };
      break;

    default:
      return state;
  }
};
