import MaterialProductoRepository from '../../repositories/MaterialProductoRepository.js';

/**
 * Servicio para obtener  páginas de regístros desde la base de datos.
 * @class GetPageMaterialProductoService
 * @constructor
 * @param {MaterialProductoRepository} repository - Repositorio de materiales-productos.
 * @description Esta clase se encarga de obtener todas las relaciones material-producto.
 * */
class GetPageMaterialProductoService{
    constructor(repository = new MaterialProductoRepository()){
        this.repository = repository;
    }

    /**
     * Obtiene la relación material-producto desde la base de datos.
     * @param {number} ID - ID de la relación a material-producto solicitada.
     * @param {boolean} paranoid - Determina si se deben considarera los regístros marcados con soft-delete.
     * @param {transaction} [transaction=null] - Transacción de la base de datos.
     * @returns {Promise<Object>} - Promesa con el resultado de la operación.
     * */
    execute = async (pag = 1, limit = process.env.DEFAULT_REG_POR_PAGINA, paranoid = true) => {
        const desde = (pag - 1) * limit;
        const result = await this.repository.getPage(desde, limit, paranoid);
        return result;
    }
}

export default GetPageMaterialProductoService;