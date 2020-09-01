
const axios = require ('axios');
const apiKey='7ca5d33330fad0baa805ad1f9b561410';

 
const getClima = async (lat,lng)=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);  
    if (resp.data.weather[0].length===0){
        throw new Error (`No puedo obtener el clima  para ${lat} ${lng}`);
    }
     
    const  datos = resp.data.main.temp;
    return datos;
}

module.exports = {
    getClima
}