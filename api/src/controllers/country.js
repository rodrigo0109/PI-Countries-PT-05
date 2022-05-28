const { Country } = require('../db')

async function getAllCountries(req, res) {
    try {
        let Allcountries = await Country.findAll()
        res.send(Allcountries)
    } catch (error) {
        res.send(error)
    }
}

module.exports = getAllCountries