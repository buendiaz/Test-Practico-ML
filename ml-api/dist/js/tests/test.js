"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the dependencies for testing
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../app"));
// Configure chai
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
describe("Products", () => {
    describe("GET /", () => {
        // Test to get results for searching
        it("should get 4 products", (done) => {
            chai_1.default.request(app_1.default)
                .get('/api/items?q=arturo')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
        // Test to get a single product detail
        it("should get a single item record", (done) => {
            chai_1.default.request(app_1.default)
                .get(`/api/items/MLA867300702`)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
        // Test to get an error when ID is not official but endpoint exist
        it("should not get a single item record", (done) => {
            chai_1.default.request(app_1.default)
                .get(`/api/items/MLA8673007sss02`)
                .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
        // Test to get an error when ID is not present in url
        it("should not get a single item record", (done) => {
            chai_1.default.request(app_1.default)
                .get(`/api/items/ `)
                .end((err, res) => {
                res.should.have.status(500);
                done();
            });
        });
    });
});
