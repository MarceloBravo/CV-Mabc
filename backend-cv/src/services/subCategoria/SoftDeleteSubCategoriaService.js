import SubCategoriaRepository from '../../repositories/SubCategoriaRepository.js';

/**
 * Servicio para eliminar lógicamente una subcategoría.
 * @class
 * @constructor
 * @param {SubCategoriaRepository} repository - Repositorio de subcategorías.
 * @description Esta clase se encarga de realizar el soft delete de una subcategoría.
 * */
class SoftDeleteSubCategoriaService{
    constructor(repository = new SubCategoriaRepository()){
        this.repository = repository;
    }

    /**
     * Realiza el soft delete de una subcategoría.
     * @param {number} id - ID de la subcategoría a eliminar.
     * @param {transaction} [transaction=null] - Transacción de la base de datos.
     * @returns {Promise<Object>} - Resultado de la operación.
     * */
    execute = async (id, transaction = null) => {
        return await this.repository.softDelete(id, transaction);
    }
}

export default SoftDeleteSubCategoriaService;