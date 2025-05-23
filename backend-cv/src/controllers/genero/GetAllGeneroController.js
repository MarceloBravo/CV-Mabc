import GetAllGeneroService from '../../services/genero/GetAllGeneroService.js';
import { handleError } from "../../shared/functions.js";

/**
 * Controlador para obtener todos los registros de género
 * @class
* @param {GetAllGeneroService} service - Servicio para obtener todos los registros de género
* @returns {GetAllGeneroController} - Instancia del controlador
* @description Este controlador se encarga de manejar la lógica para obtener todos los registros de género.
* */
class GetAllGeneroController{
    constructor(service = new GetAllGeneroService()) {
        this.service = service;
    }

    /**
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @returns {Promise<void>} - Promesa que se resuelve cuando se envía la respuesta
     */
    execute = async (req, res) => {
        try{
            const data = await this.service.execute();
            res.json(data);
        }catch(e){
            const err = handleError(e);
            res.status(err.code).json(err);
        }
    }

}

export default GetAllGeneroController;

