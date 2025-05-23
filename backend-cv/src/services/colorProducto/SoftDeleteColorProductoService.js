import ColorProductoRepository from '../../repositories/ColorProductoRepository.js';

class SoftDeleteColorProductoService {
    constructor(repository = new ColorProductoRepository()) {
        this.repository = repository;
    }

    execute = async (id, transaction = null) => {
        return await this.repository.softDelete(id, transaction);
    }
}   

export default SoftDeleteColorProductoService;