import Sedes from '../models/sedes.model.js';

export const getSedes = async (req, res) => {
    const foundSedes = await Sedes.find();
    if(!foundSedes){
        return res.status(404).json({mansaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundSedes);
}

export const getSede = async (req, res) => {
    try {
        const foundSedes = await Sedes.findById(req.params.id);
        if (!foundSedes) {
            return res.status(404).json({ mensaje: 'Sede no encontrado' });
        }
        res.json(foundSedes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const registerSede = async (req, res) => {
    const { nombre, direccion, telefono, ciudad, url } = req.body;
    
    if (!nombre || !direccion || !telefono || !ciudad || !url) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const newSede = new Sedes({
            nombre,
            direccion,
            telefono,
            ciudad,
            url,
        });

        const SedeSaved = await newSede.save();
        res.status(201).json(SedeSaved);

    } catch (error) {
        res.status(501).json({ mensaje: error.message });
    }
}

export const updateSede = async (req, res) => {
      try {
        const sede = await Sedes.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!sede) {
          return res.status(404).json({ mensaje: 'Sede no encontrada' });
        }
        res.json({ mensaje: 'Sede actualizada' });
      } catch (error) {
        res.status(500).json({ mensaje: error.message });
      }
}

export const deleteSede = async (req, res) => {
    try {
        const sede = await Sedes.findByIdAndDelete(req.params.id, req.body, {new: true});
        if (!sede) {
        return res.status(404).json({ mensaje: 'Sede no encontrada' });
        }
        res.json({ mensaje: 'Sede eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}