//importando express
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const pagamentoController = require('../controllers/pagamentoController');
const carrinhoController = require('../controllers/carrinhoController');
const checkoutController = require('../controllers/checkoutController');
const finalizarController = require('../controllers/finalizarController');



router.get('/', homeController.index);
router.get('/pagamento', pagamentoController.index);
router.get('/carrinho', carrinhoController.index);
router.get('/checkout', checkoutController.index);
router.post('/carrinho/:id', carrinhoController.adicionarCarrinho);
router.post('/carrinhod/:index', carrinhoController.removerCarrinho);
router.get('/destroy', carrinhoController.destroyCarrinho);
router.get('/finalizar', finalizarController.index);
//router.get('/login', authController.login);
//router.get('/cadastro', UserController.renderFormCadastro);
//rota para visualizar login

/* GET home page. 
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
