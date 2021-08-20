import Base from '../_base.page'
import {Produto as prod} from '../components/sauce.elements/produto.elements'

export class Sauce_produto extends Base {


    static adicionar_produto(){
        super.clickOnElement(prod.add_produto)
    }


    static validar_produto(){
        cy.get(prod.val_produto).should('exist')
    }


  static remover_produto(){
        super.clickOnElement(prod.rem_produto)

    }
}