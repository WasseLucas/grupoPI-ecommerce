const Produto = require('../models/ProductModels.js')

const carrinhoController = {

    index:(req,res) =>{
        const carrinho = req.session.carrinho

        res.render("./pages/carrinho", { carrinho })
    },
    adicionarCarrinho:(req,res) =>{ 
        const addCart = Produto.findById(req.params.id)
        if (req.session.carrinho != undefined){
            req.session.carrinho.push(addCart)
        }else{
            req.session.carrinho = [addCart]
        }
        console.log(req.session.carrinho)
        res.redirect("/carrinho")
     },
    removerCarrinho:(req,res) =>{
    req.session.carrinho.splice(req.params.index, 1)
        res.redirect("/carrinho")
    },
}
module.exports = carrinhoController