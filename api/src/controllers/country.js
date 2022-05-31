const { Country } = require('../db')

async function getAllCountries(req, res, next) {
    let { name, continent } = req.query
    console.log('en back',req.query)
    try {
        let Allcountries = await Country.findAll()
        if (name) {
            if(continent === '' || continent === 'All'){
                let countries = Allcountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
                res.send(countries)
            } else {
                let countries = Allcountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()) && c.region === continent )
                res.send(countries)
            }
        } else {
            //console.log('paises',Allcountries)
            res.send(Allcountries)
        }
    } catch (error) {
        res.send(error)
    }
}

async function getCountryById(req, res) {
    let { id } = req.params
    console.log('id', id)
    try {

        let country = await Country.findByPk(id)
        //console.log(country.toJSON())
        res.send(country)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllCountries,
    getCountryById
}