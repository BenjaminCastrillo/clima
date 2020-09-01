const lugar = require ('./lugar/lugar');
const clima = require ('./lugar/tiempo');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand: true 
    }
}).argv;


const getInfo = async (direccion)=>{
    

    try {
        const coords= await lugar.getLugarLatLng(direccion);
     
        const temp = await clima.getClima(coords.lat,coords.lng)
        
        return `El clima de ${coords.localizacion} es de ${temp} grados`;

    }catch (e) {

        return `No se pudo determinar el clima para ${direccion}`;

    }
    
};

getInfo(argv.direccion)
    .then (console.log)
    .catch (console.log);