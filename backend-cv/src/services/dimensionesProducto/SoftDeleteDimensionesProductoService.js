import DimensionesProductoRepository from '../../repositories/DimensionesProductoRepository.js';

class SoftDeleteDimensionesProductoService{
    constructor(repository = new DimensionesProductoRepository()) {
        this.repository = repository;
    }

    /**
     * Elimina un registro de dimensiones de producto de forma suave (soft delete)
     * @param {number} id - ID del registro a eliminar
     * @param {Transaction} transaction - Transacción opcional
     * @returns {Promise<Object>} - El registro eliminado
     */
    execute = async (id, transaction = null) => {
        return await this.repository.softDelete(id, transaction);
    }
}

export default SoftDeleteDimensionesProductoService;