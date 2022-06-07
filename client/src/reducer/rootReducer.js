import { GET_ALL_COUNTRIES, GET_COUNTRIES_NAME, GET_COUNTRY_ID, ORDER_BY_CONTINENT, GET_BY_ORDER, GET_ACTIVITIES, ORDER_BY_ACTIVITIES, GET_BY_ORDER_POP } from "../actions/actions";

const initialState = {
  countries: [],
  countriesFiltered: [],
  countryDetail: [],
  activity: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload,
      }

    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload
      }

    case GET_COUNTRY_ID:
      return {
        ...state,
        countryDetail: action.payload
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activity: action.payload
      }

    case ORDER_BY_CONTINENT:
      const continents = [...state.countriesFiltered];
      const continentFilter = action.payload === 'All' ? continents : continents.filter(el => el.region === action.payload)
      return {
        ...state,
        countries: continentFilter,
        continent: action.payload
      }

    case ORDER_BY_ACTIVITIES:
      const activities = state.countriesFiltered;
      const activitiesFiltered = action.payload === 'All' ? activities.filter(e => e.activities.length > 0) :
        activities.filter(c => c.activities.find(el => el.name.toLowerCase() === action.payload))
      return {
        ...state,
        countries: activitiesFiltered
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

    case GET_BY_ORDER_POP:
      const orderCountriesPop = action.payload === 'Asc' ?
        state.countries.sort(function (a, b) {
          if (a.population > b.population) {
            return -1;
          }
          if (b.population > a.population) {
            return 1;
          }
          return 0;
        }) :
        state.countries.sort(function (a, b) {
          if (a.population > b.population) {
            return 1;
          }
          if (b.population > a.population) {
            return -1
          }
          return 0;

        })

      return {
        ...state,
        countries: orderCountriesPop
      }

    default:
      return state
  }
};

export default rootReducer;
