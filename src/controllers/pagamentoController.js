const pagamentoController = {
    index:(req,res) =>{        
        let total = 0
        for(i = 0; i < req.session.carrinho.length; i++){
            total =  total+parseFloat(req.session.carrinho[i].preco)            
        }
        res.render("./pages/pagamento", {total})
    }
}

module.exports = pagamentoController