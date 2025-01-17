import {Router} from "express";
import {getSede, getSedes, registerSede, deleteSede, updateSede} from "../controllers/sedes.controllers.js";

const router = Router();

router.get("/sedes", getSedes);
router.get("/sede/:id", getSede);
router.post("/sede", registerSede);
router.put("/sede/:id", updateSede);
router.delete("/sede/:id", deleteSede);

export default router;