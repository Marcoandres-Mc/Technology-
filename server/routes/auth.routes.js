import { Router } from "express";
<<<<<<< HEAD
import { register, login, logout, profile, getAdmins} from "../controllers/auth.controllers.js";
=======
import { register, login, logout, profile, getAdmins, deleteAdmin} from "../controllers/auth.controllers.js";
>>>>>>> committ

const router = Router();


router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/profile", profile);

router.get("/admins", getAdmins);

<<<<<<< HEAD
=======
router.delete("/admins/:id", deleteAdmin);

>>>>>>> committ
export default router;