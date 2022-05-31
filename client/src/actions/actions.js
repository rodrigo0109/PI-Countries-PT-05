import axios from 'axios'

//import { GET_ALL_COUNTRIES } from '../types/types'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const GET_BY_CONTINENT = 'GET_BY_CONTINENT'
export const GET_BY_ORDER = 'GET_BY_ORDER'


export const getAllCountries = () => {
    return async (dispatch) => {
        let res = await axios.get('http://localhost:3001/countries')
        //console.log('pide',res.data)
        dispatch({
            type: GET_ALL_COUNTRIES,
            payload: res.data
        })
    };
};


export const getCountriesByName = (query) => {
    return async (dispatch) => {
        //console.log(query)
        let res = await axios.get(`http://localhost:3001/countries?name=${query.name}&continent=${query.continent}`)
        //console.log('resName',res.data)
        dispatch({
            type: GET_COUNTRIES_NAME,
            payload: res.data
        })
    };
};

export const getCountryById = (id) => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/countries/${id}`)
        //console.log('resID',res.data)
        dispatch({
            type: GET_COUNTRY_ID,
            payload: res.data
        })
    }
}

export const createActivity = (payload) => {
    return async () => {
        //console.log(payload)
        let res = await axios.post(`http://localhost:3001/activity`, payload)
        console.log(res.data)
    }
}

export const filterByContinent = (payload) => {
    return {
        type: GET_BY_CONTINENT,
        payload
    }
}

export const Order = (payload) => {
    return {
        type: GET_BY_ORDER,
        payload
    }
}