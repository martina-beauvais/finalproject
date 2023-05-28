import { Router } from "express";
import passport from "passport";
import uploader from "../services/uploader.js";
import sessionsController from "../controllers/sessions.controller.js";

const router = Router();

router.post('/register', uploader.single('avatar'),sessionsController.register);
router.post('/login',passport.authenticate('login'),sessionsController.login);
router.get('/github', passport.authenticate('github'), (req, res) => { })
router.get('/githubcallback', passport.authenticate('github'), sessionsController.gitHubCallback);
router.get('/loginFail',sessionsController.loginFail);

export default router;