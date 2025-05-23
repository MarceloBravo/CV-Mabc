import GetAllTallaLetraService from '../../services/tallaLetra/GetAllTallaLetraService.js';
import { handleError } from "../../shared/functions.js";

/**
 * Controlador para obtener todas las tallas letra
 * @class GetAllTallaLetraController
 * @param {GetAllTallaLetraService} service - Servicio para obtener todas las tallas letra
 * @returns {GetAllTallaLetraController} - Instancia del controlador
 * @description Este controlador se encarga de manejar la lógica para obtener todas las tallas letra.
 */
class GetAllTallaLetraController {
    constructor(service = new GetAllTallaLetraService()) {
        this.service = service;
    }

    /**
     * Obtiene todas las tallas letra.
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @returns {Promise<void>} - Promesa que se resuelve cuando se envía la respuesta
     */
    execute = async (req, res) => {
        try {
            const data = await this.service.execute();
            res.json(data);
        } catch(e) {
            const err = handleError(e);
            res.status(err.code).json(err);
        }
    }
}

export default GetAllTallaLetraController;

