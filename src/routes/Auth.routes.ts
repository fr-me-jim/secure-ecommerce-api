import { Router } from "express";
import { strategy, middlewares } from '../routes/index';

// controllers
import UserController from '../controllers/User.controller';

// router
const router = Router();

router.post("/signin", UserController.registerUser);
router.get("/logout", ...middlewares, UserController.logout);
router.post("/login", strategy.authenticate('local', { session: false }), UserController.login);

export default router;