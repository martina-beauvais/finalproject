import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";
import { executePolicies } from "../middlewares/auth.js";

const router = Router();

router.get('/product/:pro',cartsController.insertProductToCart);
router.get('/purchase', cartsController.purchase);
router.post('/deleteProduct', cartsController.deleteProductById);
router.post('/deleteAll', cartsController.deleteCart);

export default router; 