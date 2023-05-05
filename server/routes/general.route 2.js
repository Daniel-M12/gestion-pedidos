module.exports = app => {
    app.get('/api/products/GetProducts', (req, res) => {
        var data = require('../json/products.json');
        res.json(data);
    })
}