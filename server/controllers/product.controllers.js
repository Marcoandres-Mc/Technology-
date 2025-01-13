import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    const foundProducts = await Product.find();
    if(!foundProducts){
        return res.status(404).json({mansaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundProducts);
}


export const getProduct = async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id);
        if (!foundProduct) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(foundProduct);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const registerProduct = async (req, res) => {
    const { nombre, categoria, marca, precio, stock, url, descripcion } = req.body;
    
    if (!nombre || !categoria || !marca || !precio || !stock || !url || !descripcion) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const newProduct = new Product({
            nombre,
            categoria,
            marca,
            precio,
            stock,
            url,
            descripcion,
        });

        const productSaved = await newProduct.save();
        res.status(201).json(productSaved);

    } catch (error) {
        res.status(501).json({ mensaje: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ mensaje: 'ID es requerido' });
    }
  
    try {
        await Product.findByIdAndDelete(id);
        res.json({ mensaje: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}


  export const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if (!product) {
        return res.status(404).json({ mensaje: 'producto no encontrada' });
      }
      res.json({ mensaje: 'producto actualizada' });
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

export default { getProducts, getProduct, registerProduct, deleteProduct, updateProduct };

