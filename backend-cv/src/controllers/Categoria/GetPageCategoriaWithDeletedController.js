import GetPageCategoriaService from "../../services/Categoria/GetPageCategoriaService.js";
import { handleError } from "../../shared/functions.js";

class GetPageCategoriaWithDeletedController{
    constructor(service = new GetPageCategoriaService()) {
        this.service = service;
    }

    execute = async (req, res) => {
        try {
            const { pag = 1, limit = 10 } = req.params;
            const { rows , count, totPag} = await this.service.execute(pag, limit, false);
            res.json({data: {data: rows, totReg: count, rows: rows.length, pag: parseInt(pag), totPag}});
        } catch (e) {
            const err = handleError(e);
            res.status(err.code).json(err);
        }
    }   
}

export default GetPageCategoriaWithDeletedController;