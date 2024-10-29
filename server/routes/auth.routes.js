import { Router } from "express";

import { register, login, logout, profile, getAdmins, deleteAdmin} from "../controllers/auth.controllers.js";


const router = Router();


router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/profile", profile);

router.get("/admins", getAdmins);

router.delete("/admins/:id", deleteAdmin);

export default router;