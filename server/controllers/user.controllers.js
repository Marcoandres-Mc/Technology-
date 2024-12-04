import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';


export const getUser = async (req, res) => {
    const foundUsers = await User.find();
    if(!foundUsers){
        return res.status(404).json({mansaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundUsers);
}

export const getUserNombre = async (req,res) =>{
    try{
        const foundUser = await User.findById({ id: req.body.id })
        if(!foundUser){
            return res.status(404).json({mensaje:'Usuario no encontrado'})
        }
        res.json(foundUser);

    } catch(error){
        res.status(500).json({ mensaje: error.message });
    }
}

export const postUser = async (req,res)=>{
    const {nombre, email, password} = req.body;
    
    if (!nombre || !email || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

     try {
        const passwordCrypt = await bcrypt.hash(password, 10);
        const newUser = new User({
            nombre,
            email,
            password: passwordCrypt,
        });

        const userSaved = await newUser.save();

        res.status(201).json(userSaved);


    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ mensaje: 'ID es requerido' });
    }
  
    try {
      const foundUser = await User.findById(id);
  
      if (!foundUser) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      await User.findByIdAndDelete(id);
      res.json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  };

  export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
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

        return res.status(200).json({token});

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
    


export default {getUser, getUserNombre, postUser, deleteUser};