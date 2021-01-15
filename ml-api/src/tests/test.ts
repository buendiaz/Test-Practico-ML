// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Products", () => {
    describe("GET /", () => {

        // Test to get results for searching
        it("should get 4 products", (done) => {
             chai.request(app)
                 .get('/api/items?q=arturo')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get a single product detail
        it("should get a single item record", (done) => {
             chai.request(app)
                 .get(`/api/items/MLA867300702`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get an error when ID is written with error but endpoint exist
        it("should not get a single item record", (done) => {
             chai.request(app)
                 .get(`/api/items/MLA8673007sss02`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});
