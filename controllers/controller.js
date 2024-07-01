import Service from "../services/Service.js"
const service = new Service();

class Controller {
    
addSonda = (req, res) => {
    const { id, temperatura } = req.body;
    try {
        const data = service.addSonda({ id, temperatura });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ errorMsg: error.message });
    }
};

getAllSondas = (req, res) => {
    const data = service.getAllSondas();
    res.status(200).json(data);
};

getSondaById = (req, res) => {
    const { id } = req.params;
    try {
        const data = service.getSondaById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
}

export default Controller;