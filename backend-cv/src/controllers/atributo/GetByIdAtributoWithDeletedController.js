import GetByIdAtributoService from '../../services/atributo/GetByIdAtributoService.js';
import { handleError } from "../../shared/functions.js";

class GetByIdAtributoWithDeletedController{    

    constructor(service = new GetByIdAtributoService){
        this.service = service;
    }

    execute = async (req, res) => {
        try{
            const { id } = req.params
            const data = await this.service.execute(id, false)
            res.json(data);
        }catch(e){
            const err = handleError(e);
            res.status(err.code).json(err);
        }
    }
}

export default GetByIdAtributoWithDeletedController;
