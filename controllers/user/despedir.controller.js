const despedir = (req, res) => {
    res.send(`<h1>Chau ${req.nombre} desde el Controlador</h1>`);
}

export default despedir;