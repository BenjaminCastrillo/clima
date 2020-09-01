const axios = require ('axios');

const apiKey='e23da581a8e04d00b8d3fa322d02c495';
 
const getLugarLatLng = async (direccion)=>{

    const encodeUrl=encodeURI(direccion);


    const resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${encodeUrl}`)
    
    if (resp.data.results[0].length===0){

        throw new Error (`No hay resultados para ${direccion}`);
    }
     
    const data= resp.data.results[0];
    const localizacion =data.formatted;    
    const lat = data.geometry.lat;    
    const lng = data.geometry.lng;    

    return {
        localizacion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}