import GetAllTallaNumeroService from '../../services/tallaNumero/GetAllTallaNumeroService.js';
import { handleError } from "../../shared/functions.js";

/**
 * Controlador para obtener todas las tallas numéricas
 * @class
 * @param {GetAllTallaNumeroService} service - Servicio para obtener todas las tallas numéricas
 * @returns {GetAllTallaNumeroController} - Instancia del controlador
 * @description Este controlador se encarga de manejar la lógica para obtener todas las tallas numéricas.
 */
class GetAllTallaNumeroController {
    constructor(service = new GetAllTallaNumeroService()) {
        this.service = service;
    }

    /**
     * Obtiene todas las tallas numéricas.
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

export default GetAllTallaNumeroController;

