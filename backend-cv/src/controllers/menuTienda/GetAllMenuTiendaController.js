import GetAllMenuTiendaService from '../../services/menuTienda/GetAllMenuTiendaService.js';
import { handleError } from "../../shared/functions.js";

/**
 *  Controlador encargado de retornar  todos los menús de la tienda en la base de datos
 * @class GetAllMenuTiendaController
 * @param {GetAllMenuTiendaService} service - Servicio para obtener todos los registros de la base de datos
 * @returns {GetAllMenuTiendaController} - Instancia del controlador 
 * @description - Controlador encargado de retornar todo los menús de la tienda registrados en la base de datos
 */
class GetAllMenuTiendaController{

    constructor(service = new GetAllMenuTiendaService()){
        this.service = service;
    }

    /**
     * Retorn todos los menús de la tienda en la base de datos.
     * @param {Object} req - Objeto de solicitud.
     * @param {Object} res - Objeto de respuesta.
     * @returns {Promise<void>} - Promesa que se resuelve cuando se completa la operación.
     * @description Esta función es el endpoint que maneja la obtención de todos los menús de la tienda en la base de datos.
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

export default GetAllMenuTiendaController;

