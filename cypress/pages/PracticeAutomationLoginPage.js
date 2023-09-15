class PracticeAutomationLoginPage{
    elements = {
        practiceTab: () => cy.get("#menu-item-20"),
        loginInput: ()=> cy.get('#username'),
        loginPassword :()=>cy.get('#password'),
        loginSubmit :()=>cy.get('#submit'),
        loginMessage:()=>cy.get('.post-title'),
        logout:()=>cy.get('.wp-block-button__link'),
        ErrorMessage:()=>cy.get('#error'),

    };

    navigateToTestLoginPage(){
        this.elements.practiceTab().click()
        cy.contains('Test Login Page').click()
    }
    userName(username){
        this.elements.loginInput().type(username);
    }
    userPassword(password){
        this.elements.loginPassword().type(password)
    }
    submitButton(){
        this.elements.loginSubmit().click();
    }
    submit(username,password){
        this.elements.loginInput().type(username);
        this.elements.loginPassword().type(password);
        this.elements.loginSubmit().click();
    }


}
export const practiceAutomationLoginPage = new PracticeAutomationLoginPage()
