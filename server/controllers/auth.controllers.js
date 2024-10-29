import Auth from '../models/auth.model.js';
import bcrypt from 'bcryptjs';
import createAssessToken from '../libs/jwt.js';


export const register = async (req, res) => {
    const {userName, email, password} = req.body;
    
    if (!userName || !email || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

     try {
        const passwordCrypt = await bcrypt.hash(password, 10);
        const newUser = new Auth({
            userName,
            email,
            password: passwordCrypt,
        });

        const userSaved = await newUser.save();
        const token = createAssessToken({id: userSaved._id});
        res.cookie("token", token)
        res.status(201).json({token});


    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const login = async (req, res) => {
    const {userName, password} = req.body;

    if (!userName || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const user = await Auth.findOne({ userName });

        if (!user) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

        const token = createAssessToken({ id: user._id });
        res.cookie("token", token)
        res.status(200).json({ mensaje: 'Login exitoso' });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const logout = async (req, res) => {
    return res.status(200).json({ mensaje: 'Logout exitoso' });
}

export const profile = async (req, res) => {
    res.json({ mensaje: 'Profile' });
}
export const getAdmins = async (req, res) => {
    const foundAdmins = await Auth.find();
    if(!foundAdmins){
        return res.ststus(404).json({mansaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundAdmins);
}


export default { register, login, logout, profile, getAdmins };	