import Sonda from "../models/Sonda.js";
import { validateSonda, validateId } from "../utils/validation.js"
const sonda = new Sonda();

class Service {

    addSonda = (id, temperatura) => {
        const sonda = { id, temperatura };
        validateSonda(sonda);
        return sonda.add(sonda);
    };
    
    getAllSondas = () => {
        return sonda.getAll();
    };
    
    getSondaById = (id) => {
        validateId(id);
        return sonda.getById(id);
    };
};

export default Service;

