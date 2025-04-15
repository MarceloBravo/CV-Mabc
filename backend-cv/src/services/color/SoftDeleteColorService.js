import { softDeleteColor } from '../../repositories/color.repository.js';

const softDeleteColorService = async (id) => {
    try {
        const record = await softDeleteColor(id);
        if(record && record.deleted_at == null){
            return {status: (result ? 200: 405), mensaje: (result ? 'Registro eliminado exitosamente.' : 'El registro no pudo ser eliminado o registro inexistente')};
        }else{
            return {status: 404,  mensaje: 'Registro no encontrado.'};
        }
    } catch (error) {
        throw new Error("Error al eliminar el color: " + error.message);
    }
}

export default softDeleteColorService;