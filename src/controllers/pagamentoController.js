const pagamentoController = {
    index:(req,res) =>{        
        console.log(req.session.carrinho)
        let total = 0
        for(i = 0; i < req.session.carrinho.length; i++){
            total =  total+parseFloat(req.session.carrinho[i].preco)            
        }
        console.log(total)
        res.render("./pages/pagamento", {total})
    }
}

module.exports = pagamentoController