import GetAllSubCategoriaService from "../../services/subCategoria/GetAllSubCategoriaService.js";
import { handleError } from "../../shared/functions.js";

/**
 * Controlador encargado de obtener todas las subcategorías
 * @class
 * @param {GetAllSubCategoriaService} service - Servicio para obtener subcategorías
 * @returns {GetAllSubCategoriaController} - Instancia del controlador
 */
class GetAllSubCategoriaController{
    constructor(service = new GetAllSubCategoriaService()){
        this.service = service;
    }

    /**
     * Obtiene todas las subcategorías activas.
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Promise<void>} - Promesa que se resuelve cuando se completa la operación.
     * @description Esta función maneja la obtención de todas las subcategorías activas.
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

export default GetAllSubCategoriaController;