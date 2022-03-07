import { Router } from "express";
import { strategy } from '..//index';

// controllers
import UserController from '../controllers/User.controller';
import AdminController from '../controllers/Admin.controller';

// router
const router = Router();

router.get("/", strategy.authenticate('jwt', { session: false }), AdminController.getAllUserInfo);
router.get("/:id", strategy.authenticate('jwt', { session: false }), AdminController.getUserInfo);
router.get("/me", strategy.authenticate('jwt', { session: false }), UserController.getUserProfileInfo);

export default router;