class RedirectExample{
    elements={
        redirectTest:()=>cy.get('#redirecttest'),
        redirectButton:()=>cy.get("#delaygotobasic"),
        redirectButtonTwo:()=>cy.get("#delaygotobounce"),

    }
    navigateToTheRedirectPage(){
        this.elements.redirectTest().click()
    }

}
export const redirect = new RedirectExample()
