import Sonda from "../models/Sonda.js";
import { validateSonda, validateId } from "../utils/validation.js"
const sonda = new Sonda();

class Service {

    addSonda = async (dataSonda) => {
        validateId(dataSonda.id);
        validateSonda(dataSonda.temperatura);
        return await sonda.add(dataSonda);
    };
    
    getAllSondas = async () => {
        return await sonda.getAll();
    };
    
    getSondaById = async (id) => {
        validateId(id);
        return await sonda.getById(id);
    };
};

export default Service;

