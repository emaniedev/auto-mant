const API_URL = 'http://localhost:1337/api/';


export async function createAuto (data) {

    const response = await fetch(API_URL + "autos", {
        method : 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response.json());
    return response.json();
}

