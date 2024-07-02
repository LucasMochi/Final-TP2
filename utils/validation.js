export const validateSonda = ( temperatura ) => {
    if (temperatura < -20 || temperatura > 100) {
        throw new Error('Numero de temperatura incorrecto.');
    }
};

export const validateId = (id) => {
    if (id < 1 || id > 5) {
        throw new Error('Número de sonda incorrecto.');
    }
};
