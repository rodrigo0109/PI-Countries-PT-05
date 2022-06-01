const { Activity, Country } = require('../db')

async function getActivities(req, res) {
    try {
        let activities = await Activity.findAll({include: Country})
        //console.log(activities.id)
        let countriesA = activities.map( a => a.name.toLowerCase() )
        const total = countriesA.filter((item, index) => {
            return countriesA.indexOf(item) === index;
        })
        //console.log(countriesA)
        res.send(total)
    } catch (error) {
        res.send(error)
    }
}

async function createActivity(req, res) {
    let { name, difficulty, duration, season, countries } = req.body
    //console.log(req.body)
    try {
        let newActivity = await Activity.create({
            name, difficulty, duration, season
        })
        await newActivity.setCountries(countries)

        let activityCountry = await Activity.findOne({
            where: {
                name: name
            },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        //console.log(activityCountry)
        res.send(activityCountry)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createActivity,
    getActivities
}