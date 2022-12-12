const finalizarController = {
    index: (req, res) => {
        res.render("pages/finalizar")
    },
    totalPag: (req, res) => {
        let total = 0
        for (i = 0; i < req.session.carrinho.length; i++) {
            total = total + parseFloat(req.session.carrinho[i].preco)
        }
        res.render("./pages/pagamento", { total })
    }
}

module.exports = finalizarController;