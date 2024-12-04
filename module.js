const URL = "http://127.0.0.1:3000/";

export const server = async (endpoint) => {
    const respuesta = await fetch(`${URL}${endpoint}`);
    return await respuesta.json();
}