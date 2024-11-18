const main = (req, res, next) => {
    req.nombre = "DavidJ";
    next();
};

export default main;