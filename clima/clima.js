const axios = require("axios");



const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bd9069bf4772af4ed1175d084a08998c&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}