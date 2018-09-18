const stationsApi = require('../src/apis/stations');

test('call the api function', async () => {

    await stationsApi.getAllStations().then((stations) => {
        stations.map(data => {
            console.info(data.Name);
        })
        expect(stations).toBeDefined();
    });
});