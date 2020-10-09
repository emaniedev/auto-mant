import API_URL from './API_URL';

const apiAutos = API_URL + "autos"

async function getAllAutos() {
    const response = await fetch(apiAutos);
    return response.json();
}

async function getOneAuto(id) {
    const response = await fetch(apiAutos + "/" + id);
    return response.json();
}

async function updateOneAuto(id, data) {
    const response = await fetch(apiAutos + "/" + id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

async function createAuto(data) {
    const response = await fetch(apiAutos, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

async function deleteOneAuto(id) {
    const response = await fetch(apiAutos + "/" + id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json();
}


const Autos = {
    getAllAutos,
    getOneAuto,
    updateOneAuto,
    createAuto,
    deleteOneAuto
}


export default Autos;