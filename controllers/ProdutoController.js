const produtoController = {
    criarProdutos:(req ,res) => {
        //
        res.send('Criando um produto'); 
    },
    deletarProduto:(req, res) => {
        res.send('Deletando Produto')
    }
}

module.exports = produtoController;