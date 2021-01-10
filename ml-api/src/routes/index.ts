import { Router } from "express"
import { getSearch } from "../controllers/search"

const router: Router = Router()

router.get("/api/items", getSearch)

/*
router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)
*/
export default router