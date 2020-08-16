const produtos = [
    {
        id:1,
        preco: 1.80,
        descricao: 'Gel de cabelo'
    },

    {
        id:2,
        preco: 2.90,
        descricao: 'Shampoo'
    },

    {
        id:3,
        preco: 3.55,
        descricao: 'Condicionador'
    }
];




const carrinho = {
    total: 0,
    itens: []
};



function buscarItem(id) {
    const produto = produtos.find(function (item) {
        return item.id === id;
    });
    return produto;
}



function adicionarNoCarrinho(idProduto) {
    const produto = buscarItem(idProduto);

    if (produto === '') {
        return 'Produto indisponível'; 
    }

    carrinho.itens.push(produto);
    carrinho.total +=  produto.preco;
}


adicionarNoCarrinho(3);
adicionarNoCarrinho(2);
adicionarNoCarrinho(1);

console.table(carrinho.itens);



function removerItemDoCarrinho(id) {
    const itensAPermanecerNoCarrinho = carrinho.itens.filter(function (produto) {
        if (produto.id !== id) {
            return produto;
         }
    });

    carrinho.itens = itensAPermanecerNoCarrinho;
}


removerItemDoCarrinho(2);
console.table(carrinho.itens);

