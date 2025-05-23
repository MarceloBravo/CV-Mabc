import GetAllTipoDimensionesService from '../../services/tipoDimensiones/GetAllTipoDimensionesService.js';
import { handleError } from "../../shared/functions.js";

/**
 * Controlador para obtener todos los tipo de dimensiones activos
 * @class GetAllTipoDimensionesController
 * @param {GetAllTipoDimensionesService} service - Servicio para obtener todos los tipo de dimensiones activos
 * @returns {GetAllTipoDimensionesController} - Instancia del controlador
 * @description Este controlador se encarga de manejar la lógica para obtener todos los tipo de dimensiones activos.
 */
class GetAllTipoDimensionesController {
    constructor(service = new GetAllTipoDimensionesService()) {
        this.service = service;
    }

    /**
     * Maneja la petición para obtener todos los tipos de dimensiones
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Promise<void>} - Promesa que se resuelve cuando se completa la operación.
     * @description Esta función maneja la obtención de todos los registros activos.
     * */
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

export default GetAllTipoDimensionesController;