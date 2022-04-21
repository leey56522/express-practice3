const app = require('./server').app;
const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();


describe('Cocktail', () => {
    describe('GET', () => {
        
        // Gets 200
        it('GET', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })

        // Gets json file (array)
        it('returns JSON body(array)', (done) => {
            chai.request(app)
                .get('/cocktail?name=margarita')
                .end((err, res) => {
                    assert.isArray(res.body)
                    // res.body.should.be.a('array')
                    done();
                })
        })

        // Gets correct output content
        it('returns margarita as the first drink name', (done) => {
            chai.request(app)
                .get('/cocktail?name=margarita')
                .end((err, res) => {
                    assert.equal(res.body[0].idDrink, '11007');
                    done();
                })
        })
    })

})