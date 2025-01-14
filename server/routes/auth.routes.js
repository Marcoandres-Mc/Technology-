import { Router } from "express";

import { register, login, logout, profile, getAdmins, deleteAdmin, updateAdmin} from "../controllers/auth.controllers.js";

//import authRequired from "../middlewares/validateToken.js";


const router = Router();


router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/profile",profile);

router.get("/admins", getAdmins);

router.delete("/admins/:id", deleteAdmin);

router.put("/admin/:id", updateAdmin);

export default router;