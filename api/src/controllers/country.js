const { Country, Activity } = require('../db')

async function getAllCountries(req, res) {
    let { name } = req.query;
    
    try {
        let Allcountries = await Country.findAll({ include: Activity });
        if (name) {
            let countries = Allcountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            res.send(countries);
        } else {
            res.send(Allcountries);
        }
    } catch (error) {
        res.send(error);
    }
};

async function getCountryById(req, res) {
    let { id } = req.params;

    try {
        let country = await Country.findByPk(id, { include: Activity });
        country = {
            id: country.id,
            name: country.name,
            flag: country.flag,
            region: country.region,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
            maps: country.maps,
            activities: country.activities.map(a => (
                {
                    id: a.id,
                    name: a.name,
                    duration: a.duration,
                    difficulty: a.difficulty,
                    season: a.season
                }
            ))
        };
        res.send(country);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    getAllCountries,
    getCountryById
}