import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME';
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID';
export const ORDER_BY_CONTINENT = 'ORDER_BY_CONTINENT';
export const GET_BY_ORDER = 'GET_BY_ORDER';
export const GET_BY_ORDER_POP = 'GET_BY_ORDER_POP';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ORDER_BY_ACTIVITIES = 'ORDER_BY_ACTIVITIES';


export const getAllCountries = () => {
    return async (dispatch) => {
        let res = await axios.get(`https://picountries-rhp.herokuapp.com/countries`);
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: res.data
        })
    };
};

export const getCountriesByName = (name) => {
    return async (dispatch) => {
        let res = await axios.get(`https://picountries-rhp.herokuapp.com/countries?name=${name}`);  
        dispatch({
            type: GET_COUNTRIES_NAME,
            payload: res.data
        })
    };
};

export const getCountryById = (id) => {
    return async (dispatch) => {
        let res = await axios.get(`https://picountries-rhp.herokuapp.com/countries/${id}`);
        dispatch({
            type: GET_COUNTRY_ID,
            payload: res.data
        })
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        let res = await axios.get('https://picountries-rhp.herokuapp.com/activity');
        dispatch({
            type: GET_ACTIVITIES,
            payload: res.data
        })
    };
};

export const createActivity = (payload) => {
    return async () => {
        await axios.post(`https://picountries-rhp.herokuapp.com/activity`, payload);
    };
};

export const filterByContinent = (payload) => {
    return {
        type: ORDER_BY_CONTINENT,
        payload
    }
};

export const Order = (payload) => {
    return {
        type: GET_BY_ORDER,
        payload
    }
};

export const getByOrderPop = (payload) => {
    return {
        type: GET_BY_ORDER_POP,
        payload
    }
};

export const orderByActivity = (payload) => {
    return {
        type: ORDER_BY_ACTIVITIES,
        payload
    }
};