const axios = require('axios')
const { Country } = require('./db')

async function loadDatabase() {
    let countries = Country.findAll()
    if (!countries.length > 0) {
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
                population: c.population
            }
        ))
        /* countriesApiRes.forEach( async(c) => {
            await Country.findOrCreate({
                where: {
                    id: c.id,
                    name: c.name,
                    flag: c.flag,
                    region: c.region,
                    capital: c.capital,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population
                }
            })
        } ) */
        await Country.bulkCreate(countriesApiRes) //crea varias filas de una recibiendo el arreglo de paises
        console.log('ok')
    }
}

module.exports = {
    loadDatabase
}