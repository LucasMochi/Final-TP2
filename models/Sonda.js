class Sonda {
    
    sondas = [];

    add = async (sonda) => {
        this.sondas.push(sonda);
        return this.sondas[this.sondas.length - 1];
    };

    getAll = async () => {
        return this.sondas
    };

    getById = async (id) => {
        return this.sondas.filter(ele => ele.id === id);
    };
}

export default Sonda;