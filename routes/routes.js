import { Router } from "express";
import Controller from "../controllers/controller.js";

const router = Router();
const controller = new Controller();

router.post('/', controller.addSonda);
router.get('/', controller.getAllSondas);
router.get('/:id', controller.getSondaById);

export default router;