import { GET_ALL_COUNTRIES, GET_COUNTRIES_NAME, GET_COUNTRY_ID, GET_BY_CONTINENT, GET_BY_ORDER } from "../actions/actions";

const initialState = {
  countries: [],
  countriesFiltered: [],
  countryDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload
      }

    case GET_COUNTRIES_NAME:
      //console.log('reducer name',action.payload)
      return {
        ...state,
        countries: action.payload
      }

    case GET_COUNTRY_ID:
      return {
        ...state,
        countryDetail: action.payload
      }

    case GET_BY_CONTINENT:
      const continents = state.countriesFiltered;
      const continentFilter = action.payload === 'All' ? continents : continents.filter(el => el.region === action.payload)
      return {
        ...state,
        countries: continentFilter
      }

    case GET_BY_ORDER:
      const orderCountries = action.payload === 'Asc' ?
        state.countries.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1
          }
          return 0;
        }) :
        state.countries.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        })
      return {
        ...state,
        countries: orderCountries
      }

    default:
      return state
  }
};

export default rootReducer;
