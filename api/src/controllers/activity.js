const { Activity } = require('../db')

async function createActivity(req, res) {
    let { name, difficulty, duration, season } = req.body
    console.log(req.body)
    try {
        let newActivity = await Activity.create({
            name, difficulty, duration, season
        })
        await newActivity.setCountries(countries)

        let activityCountry = await Activity.findOne({
            where: {
                name: name
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.send(activityCountry)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createActivity
}