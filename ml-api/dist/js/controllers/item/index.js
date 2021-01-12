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
exports.getItemData = void 0;
const axios_1 = __importDefault(require("axios"));
const getItemData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.id.trim() && req.params.id !== ' ') {
        let auxId = req.params.id;
        try {
            axios_1.default.get(`https://api.mercadolibre.com/items/${auxId}`)
                .then(response => {
                const MLResponse = response.data;
                // Si encuentra "id", existen los valores
                if (MLResponse.id) {
                    let searchValues = {
                        author: {
                            name: 'Maximiliano',
                            lastname: 'Díaz',
                        },
                        item: {
                            id: MLResponse.id,
                            title: MLResponse.title,
                            price: {
                                currency: MLResponse.currency_id,
                                amount: MLResponse.price,
                                decimals: 0,
                            },
                            picture: '',
                            condition: MLResponse.condition,
                            free_shipping: MLResponse.shipping.free_shipping,
                            sold_quantity: MLResponse.sold_quantity,
                            description: '',
                        },
                    };
                    // Set image
                    if (MLResponse.pictures[0]) {
                        searchValues.item.picture = MLResponse.pictures[0].url;
                    }
                    else {
                        searchValues.item.picture = MLResponse.thumbnail;
                    }
                    // Set description
                    axios_1.default.get(`https://api.mercadolibre.com/items/${auxId}/description`)
                        .then(response => {
                        const MLResponseDescription = response.data;
                        if (MLResponseDescription.plain_text) {
                            searchValues.item.description = MLResponseDescription.plain_text;
                        }
                        res.status(200).send(searchValues);
                    }).catch(err => {
                        // Envia data sin description
                        res.status(200).send(searchValues);
                    });
                }
                else {
                    res.status(500).send('Algo ha fallado al recibir los valores del item');
                }
            })
                .catch(err => res.send(err));
        }
        catch (err) {
            console.error("GG", err);
        }
    }
    else {
        res.status(500).send('Algo ha fallado al recibir el parámetro!');
    }
});
exports.getItemData = getItemData;
