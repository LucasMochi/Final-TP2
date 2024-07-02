import Service from "../services/Service.js"
const service = new Service();

class Controller {
    
addSonda = async (req, res) => {
    const { id, temperatura } = req.body;
    try {
        const newDate = new Date()
        const date = newDate.toISOString().split('T')[0]
        const data = await service.addSonda({ id, temperatura, date });
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ errorMsg: error.message });
    }
};

getAllSondas = async (req, res) => {
    const data = await service.getAllSondas();
    res.status(200).json(data);
};

getSondaById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await service.getSondaById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
}

export default Controller;