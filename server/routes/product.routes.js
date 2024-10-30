import {Router} from "express";
import {getProducts, registerProduct, deleteProduct} from "../controllers/product.controllers.js";


const router = Router();

router.get("/products", getProducts);

router.post("/products", registerProduct);

router.delete("/products/:id", deleteProduct);

export default router;