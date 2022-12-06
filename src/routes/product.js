const express = require('express')
const router = express.Router();
const multer = require('multer');
// const { storage } = require('../config/upload');

const ProdutoController = require('../controllers/ProdutoController');
 //Inicialização do multer com as configuração do storage
// const upload = multer({storage}) 

// router.get('/produto',ProdutoController.produto);

router.get('/produto/:id', ProdutoController.produto);

router.get('/produto/:categoria', ProdutoController.categoria);

module.exports = router;