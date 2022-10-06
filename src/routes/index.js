//importando express
const express = require('express');

const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/checkout', checkoutController.index);

/* GET home page. 
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;