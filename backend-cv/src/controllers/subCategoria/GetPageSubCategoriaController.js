import GetPageSubCategoriaService from "../../services/subCategoria/GetPageSubCategoriaService.js";
import { handleError } from "../../shared/functions.js";

/**
 * Controlador encargado de obtener subcategorías paginadas
 * @class
 * @param {GetPageSubCategoriaService} service - Servicio para obtener subcategorías paginadas
 * @returns {GetPageSubCategoriaController} - Instancia del controlador
 */
class GetPageSubCategoriaController{
    constructor(service = new GetPageSubCategoriaService()){
        this.service = service;
    }

    /**
     * Obtiene subcategorías paginadas.
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Promise<void>} - Promesa que se resuelve cuando se completa la operación.
     * @description Esta función maneja la obtención de subcategorías paginadas.
     * */
    execute = async (req, res) => {
        try{
            const { pag, limit } = req.params;
            const data = await this.service.execute(parseInt(pag), parseInt(limit));
            res.json(data);
        }catch(e){
            const err = handleError(e);
            res.status(err.code).json(err);
        }
    }
}

export default GetPageSubCategoriaController;