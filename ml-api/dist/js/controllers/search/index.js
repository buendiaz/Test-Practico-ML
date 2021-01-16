"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearch = void 0;
const axios_1 = __importDefault(require("axios"));
const getSearch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
            .then(response => {
            const MLResponse = response.data;
            let categories = [];
            let categoryTemp = MLResponse.available_filters.filter((result) => result.id === 'category');
            if (categoryTemp.length !== 0) {
                categories = categoryTemp.shift()
                    .values.sort((a, b) => a.results > b.results ? -1 : 1)
                    .map((item) => {
                    return item.name;
                });
            }
            const searchValues = {
                author: {
                    name: 'Maximiliano',
                    lastname: 'Díaz',
                },
                categories: categories,
                items: MLResponse.results.slice(0, 4).map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: item.price,
                            decimals: 0,
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping,
                    };
                }),
            };
            res.status(200).send(searchValues);
        })
            .catch(err => res.send(err));
    }
    catch (err) {
        console.error("GG", err);
    }
});
exports.getSearch = getSearch;
