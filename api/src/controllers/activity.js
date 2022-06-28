const { Activity, Country } = require('../db')

async function getActivities(req, res) {
    try {
        let activities = await Activity.findAll({include: Country});
        let countriesA = activities.map( a => a.name.toLowerCase());
        res.send(countriesA);
    } catch (error) {
        res.send(error);
    }
};

async function createActivity(req, res) {
    let { name, difficulty, duration, season, countries } = req.body;
    try {
        let newActivity = await Activity.create({
            name, difficulty, duration, season
        })
        await newActivity.setCountries(countries)
        res.send('ok');
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    createActivity,
    getActivities
}