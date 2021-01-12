"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const search_1 = require("../controllers/search");
const item_1 = require("../controllers/item");
const router = express_1.Router();
router.get("/api/items", search_1.getSearch);
router.get("/api/items/:id", item_1.getItemData);
exports.default = router;
