import {Router} from "express";
import {getProducts, registerProduct, deleteProduct, updateProduct} from "../controllers/product.controllers.js";


const router = Router();

router.get("/products", getProducts);

router.post("/products", registerProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;