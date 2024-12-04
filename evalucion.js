import { server } from "./module.js";

const datos = async () => {
const ciudades = await server("ciudades");
const respuesta = await Promise.all(
    ciudades.map(async (city) =>{
const usuarios = await server(`usuarios?cityId=${city.id}`);

return { ... city, usuarios}
    })
)
return respuesta;
}


datos().then((a) => {
    console.log(a);
    
})



const cargar = async () => {
const materias = await server("materias");
const respuesta = await Promise.all(
    materias.map(async (materia) =>{
const usuarios = await server(`materia_usuario?userId=${materia.id}`);

return { ... materia, usuarios}
    })
)
return respuesta;
}


cargar().then((b) => {
    console.log(b);
    
})


const mostrar = async () => {
    const usuarios = await server("usuarios");
    const respuesta = await Promise.all(
        usuarios.map(async (usuarios) =>{
    const notas = await server(`notas?subjectUserId=${usuarios.id}`);
  const sumaNotas = notas.reduce((acc, nota) => acc + nota.note, 0);
  const promedio = notas.length > 0 ? sumaNotas / notas.length : 0;
  
    return { ... usuarios, notas, promedio}
        })
    )
    return respuesta;
    }
    
    
    mostrar().then((c) => {
        console.log(c);
        
    })

    const listar = async () => {
        const usuarios = await server("usuarios");
        const respuesta = await Promise.all(
            usuarios.map(async (usuario) => {
        const materia_usuario = await server(`materia_usuario?userId=${usuario.id}`);
        
        if (materia_usuario.length > 0) {
            return { ...usuario, materia_usuario };
        }
       
        return null;
        })
    );
    return respuesta.filter((usuario) => usuario !== null);
};
        
        listar().then((usuariosMatriulados) => {
            console.log("usuarios Matriculado en materias:", usuariosMatriulados);
            
        })



    
    

