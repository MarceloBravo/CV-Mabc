
const validaDatos = (data, repository) => {
    let errors = [];
    const { id, nombre, valor_string, valor_numerico } = data;
    
    if(id && repository.getById(id) === null){
        errors.push("El atributo no es válido o no existe, especifíca un atributo válido.");
    }
    if(!nombre && !valor_string && !valor_numerico){
        arrError.push("No se ha especificado un valor para el atributo.");
    }
    if(nombre && (isNaN(nombre) === true || nombre <= 0)){
        arrError.push("El alto ingresado no es válido. Ingresa sólo números positivos.")
    }
    if(valor_string && (isNaN(valor_string) === true || valor_string <= 0)){
        arrError.push("El ancho ingresado no es válido. Ingresa sólo números positivos.")
    }
    if(valor_numerico && (isNaN(valor_numerico) === true || valor_numerico <= 0)){
        arrError.push("La profundodad ingresada no es válida. Ingresa sólo números positivos.")
    }

    if(errors.length > 0){
        const error = new Error('Datos no válidos:');
        error.code = 400;
        error.details = errors;
        throw error;
    }

    return data
}


const validaAtributos = (item, arrError) => {
    

    return arrError;
}

export default validaDatos;