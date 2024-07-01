export const validateSonda = ( sonda ) => {
    const { id, temperatura } = sonda;

    if (id < 1 || id > 5) {
        throw new Error('datos no válidos');
    }
    if (temperatura < -20 || temperatura > 100) {
        throw new Error('datos no válidos');
    }
};

export const validateId = (id) => {
    if (id < 1 || id > 5) {
        throw new Error('Número de sonda incorrecto');
    }
};
