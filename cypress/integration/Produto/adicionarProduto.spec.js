/// <reference types ="cypress"/>

import {Sauce_login} from '../../pages/sauce.pages/sauce.login'
import {Sauce_carrinho} from '../../pages/sauce.pages/sauce.carrinho'
import {Sauce_produto} from '../../pages/sauce.pages/sauce.produto'

describe('Adicionar produto no carrinho', () => {
    context('Dado que esteja logado e na pagina de produtos da sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
            Sauce_login.logar_sauce_demo()
            Sauce_login.valida_logado()
            
        })
            context('Quando clicar para adicionar um produto no carrinho', () => {
            beforeEach(() => {
                Sauce_produto.adicionar_produto()
                
            })

            it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
                Sauce_carrinho.acessar_carrinho()
                Sauce_produto.validar_produto()
                
            }) 
             
        })
    })
})





      /*  it('visitar site', () => {
                //beforeEach('Acessar', () => {
                    cy.visit('www.saucedemo.com')
                }) 
        it('logar', () => {
            Sauce.logar_sauce_demo()
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').should('be.visible')
        })
        describe('deve adicionar um produto', () => {
                it('adiciona um produto' , () => {
                    Sauce.adicionar_produto()
                })
                it('acessa carrinho', () => {
                    Sauce.acessar_carrinho()
                    cy.url().should('contain', '/cart.html')
                })
                it('verifica produto no carrinho', () => {
                    Sauce.verificar_produto()       
            
            }) 
                    })
    
    // context('Quando acessar o carrinho de compras', () => {
    // })
        
    // context('Então deverá exibir o produto escolhido dentro do carrinho', () => {
    // })
     
                                 
    })



            // specify('E clicar para adicionar um produto no carrinho', () => {
            //         Sauce.adicionar_produto()

            //     it('Quando acessar o carrinho de compras', () => {
            //         Sauce.acessar_carrinho()
            //     })

            //     it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
            //         Sauce.verificar_produto()       
            
            //     })  
            // })


    })

})
/*
describe
    context
        it
    context
        it
    context
        it
    it

*/



/*describe('Adicionar produto no carrinho', () => {
    context('Dado que esteja logado e na pagina de produtos da sauce.demo', () => {
        beforeEach(() => {
            cy.visit('www.saucedemo.com')
            Sauce_login.logar_sauce_demo()
            Sauce_login.valida_logado()
            
        })
        context('Quando clicar para adicionar um produto no carrinho', () => {
            beforeEach(() => {
                Sauce_produto.adicionar_produto()
                
            })

            it('Então deverá exibir o produto escolhido dentro do carrinho', () => {
                Sauce_carrinho.acessar_carrinho()
                Sauce_produto.validar_produto()
                
            }) 
             
        })
    })
 
})*/
