const axios = require('axios')
const { Country } = require('./db')

async function loadDatabase() {
    let countries = Country.findAll()
    if ( !countries.length ) {
        let countriesApi = (await axios.get('https://restcountries.com/v3/all')).data
        let countriesApiRes = countriesApi.map(c => (
            {
                id: c.cca3,
                name: c.name.common,
                flag: c.flags[0],
                region: c.region,
                capital: c.capital ? c.capital[0] : 'Not found',
                subregion: c.subregion,
                area: c.area,
                population: c.population,
                maps: c.maps.googleMaps
            }
        ))
        await Country.bulkCreate(countriesApiRes) //crea varias filas de una recibiendo el arreglo de paises
        console.log('ok')
    } else {
        console.log('ya estam')
    }
}

module.exports = {
    loadDatabase
}