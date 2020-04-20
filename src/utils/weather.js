const request = require("request")

const weather = ({latitude, longitude}, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2139e52e24db2c515613edf741d1f6ae&query=' + longitude + ',' + latitude
    //console.log(url)
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect weather service', undefined)
        } else if(response.body.error) {
            callback('Unable to solve the request', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })    
}

module.exports = weather