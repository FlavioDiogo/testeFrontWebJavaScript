import Base from '../_base.page'
import {Carrinho as car} from '../components/sauce.elements/carrinho.elements'

export class Sauce_carrinho extends Base {


    static acessar_carrinho(){
        super.clickOnElement(car.acessar_carrinho)
    }
}    