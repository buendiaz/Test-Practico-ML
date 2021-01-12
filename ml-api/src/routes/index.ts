import { Router } from "express";
import { getSearch } from "../controllers/search";
import { getItemData } from '../controllers/item';

const router: Router = Router()

router.get("/api/items", getSearch);
router.get("/api/items/:id", getItemData);

export default router