import validateSchema from "../../helpers/validate.helper.js"
import schema from "../../schemas/user/register.schema.js"

const main = async (req, res, next) => {
    //Recibir info en req que vamos a tener que validarla
    try {
        await validateSchema(schema, req.body);

        const { email, username, password } = req.body;
    } catch (error) {
        next(error);
    }
    
}

export default main;