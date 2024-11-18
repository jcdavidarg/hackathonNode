const saludar = (req, res) => {
    res.send(`<h1>Hola ${req.nombre} desde el Controlador</h1>`);
}

export default saludar;