var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var productCtrl = require('./controllers/productCtrl')
var cartCtrl = require('./controllers/cartCtrl')

var app = express()
var port = 8080

app.use(bodyParser.json())
app.use(express.static(__dirname + '../public'))
app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    console.log('Server listening on port ' + port)
  }
})

mongoose.connect('mongodb://localhost/weekend-ecom')

app.post('/products', productCtrl.addProduct)
app.get('/products', productCtrl.getProducts)
app.get('/products/:id', productCtrl.getProduct)
app.put('/products/:id', productCtrl.updateProduct)
app.delete('/products/:id', productCtrl.removeProduct)

app.post('/cart', cartCtrl.addCart);
app.put('/cart/:id', cartCtrl.addItem);
