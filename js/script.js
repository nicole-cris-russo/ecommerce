//-------------SEÇÃO DA VITRINE------------------

let sectionVitrine = document.querySelector(".vitrine")

//------------CRIAÇÃO DO CARD
function cardProduto (arrayProdutos) {

    let section    = document.createElement("section")
    let figure     = document.createElement("figure")
    let img        = document.createElement("img")
    let div        = document.createElement("div")
    let a          = document.createElement("a")
    let h2         = document.createElement("h2")
    let pDescricao = document.createElement("p")
    let pPreco     = document.createElement("p")
    let buttom     = document.createElement("button")
    
    section.className    = "produto"
    div.className        = "info-produto"
    a.className          = "link-categoria-produto"
    h2.className         = "nome-produto"
    pDescricao.className = "paragrafo-produto"
    pPreco.className     = "preco-produto"
    buttom.className     = "adicionar-ao-carrinho"


    section.appendChild(figure)
    section.appendChild(div)
    figure.appendChild(img)
    div.appendChild(a)
    div.appendChild(h2)
    div.appendChild(pDescricao)
    div.appendChild(pPreco)
    div.appendChild(buttom)

    img.src              = arrayProdutos.img
    a.href               = "#"
    a.innerText          = arrayProdutos.tag
    h2.innerText         = arrayProdutos.nameItem
    pDescricao.innerText = arrayProdutos.description
    pPreco.innerText     = "R$ " + arrayProdutos.value
    buttom.innerText     = arrayProdutos.addCart
    buttom.id            = arrayProdutos.id

    return section

}

//------------LISTAGEM DE PRODUTOS
function listarProdutos (arrayProdutos) {
    for (let i = 0; i < arrayProdutos.length; i++) {
        let produto = arrayProdutos[i]

        const card = cardProduto(produto)
        sectionVitrine.appendChild(card)

    }
}


listarProdutos(data)

//-------------SEÇÃO DO CARRINHO DE COMPRAS-------

