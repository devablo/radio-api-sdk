const axios = require('axios');

/* export interface IStation {
    name: string,
    call_sign: string
} */

class Station {
    constructor(name) {
        this._name = name;
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}

async function getAllStations() {
    return axios.get('https://myradio-api.scadigital.com.au/hit/stations')
        .then((response) => {
            let data = response.data.stations.map(result => {
                let station = new Station();
                station.Name = result.name;
                return station;
            });
            return data;
        });
}

module.exports.getAllStations = getAllStations;