import MenuTiendaRepository from '../../repositories/MenuTiendaRepository.js';

/**
 * Clase para obtener una página de registros de la base de datos
 * @class GetPageMenuService
 * @constructor
 * @param {MenuRepository} repository - Repositorio de menús de la tienda.
 * @description Esta clase se encarga de obtener una página de menús de la tienda de la base de datos.
 */
class GetPageMenuTiendaService{
    constructor(repository = new MenuTiendaRepository()){
        this.repository = repository;
    }

    /**
     * Obtiene una página de menús de la tienda.
     * @param {number} desde - El índice de inicio de la página.
     * @param {number} limit - El número máximo de menús de la tienda por página.
     * @param {boolean} [paranoid=true] - Si es true, se obtienen solo los menús de la tienda no eliminados.
     * @returns {Promise<Object>} - Un objeto que contiene la lista de menús de la tienda y el total de menús.
     * @description Esta función obtiene una página de menús de la tienda de la base de datos.
     * */
    execute = async (pag = 1, limit = process.env.DEFAULT_REG_POR_PAGINA, paranoid = true) => {
        const desde = (pag - 1) * limit;
        const result = await this.repository.getPage(desde, limit, paranoid);
        return result;
    }

}


export default GetPageMenuTiendaService;