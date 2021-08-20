import Base from '../_base.page'

export class Sauce_login extends Base {

    static logar_sauce_demo(){
      super.typeValue(Login.add_user, 'standard_user')
      super.typeValue(Login.add_password, 'secret_sauce')
      cy.get(Login.btn_login).click()
    }

    static valida_logado(){
      cy.get(Login.val_logado_click).click()
      cy.get(Login.val_logado_valida).should('be.visible')
    } 
  
    static digitar_usuario(user){
      cy.get(Login.add_user).type(user)
    }  

    static digitar_senha(password){
      cy.get(Login.add_password).type(password)
    }  

    static entrar_login(){
      super.clickOnElement(Login.btn_login)
    }  
}    