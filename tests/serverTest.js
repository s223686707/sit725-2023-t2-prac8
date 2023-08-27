const chai = require('chai');
const chaiHttp = require('chai-http');
const path = 'http://localhost:3000';
const endpoint = '/api/foodItems';

chai.use(chaiHttp);

const expect = chai.expect;

describe('/GET Food Items', () => {
    it('It should get all the items', (done) => {
        chai.request(path)
            .get(endpoint)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('data');
                expect(res.body.data[1]).to.have.property('title');
                expect(res.body.data[2]).to.have.property('image');
                expect(res.body.data[3]).to.have.property('subTitle');
                expect(res.body.data).to.be.an('array').that.is.not.empty;
                expect(res.body.data.length).to.be.above(0);
                done();  
            });
    });
});

describe('/POST Food Items', () => {
    it('It should post the food items', (done) => {

        let newItem = {
            title: "testing3",
            image: "testing3",
            subTitle: "testing3",
            description: "testing3"
        } 
        chai.request(path)
            .post(endpoint)
            .send(newItem)
            .end((err, res) => {
                if(err){
                    console.error(err);
                    done(err);
                    return;
                }
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.have.property('title');
                expect(res.body.data).to.have.property('image');
                expect(res.body.data).to.have.property('subTitle');
                expect(res.body).to.have.property('message').equal('Item added Successfully!!');
                done();
            });
    });
});

describe('/DELETE Food Items', () => {
    it('It should delete the food items', (done) => {
        chai.request(path)
            .delete(endpoint)
            .end((err, res) => {
                if(err){
                    console.error(err);
                    done(err);
                    return;
                }
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('data');
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('message').equal('Item deleted Successfully!!');
                done();
            });
    });
});




