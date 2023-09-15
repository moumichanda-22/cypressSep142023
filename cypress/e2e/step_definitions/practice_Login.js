import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {practiceAutomationLoginPage} from "@pages/PracticeAutomationLoginPage";

Given(/^I am in "([^"]*)" page$/, function (url) {
    cy.visit("https://"+url+".com");

});
When(/^I navigate to test login page$/, function () {
    practiceAutomationLoginPage.navigateToTestLoginPage()
});
When(/^I enters the (.*), the (.*), and clicks on the login button$/, function (username,password) {
    practiceAutomationLoginPage.userName('student')
    practiceAutomationLoginPage.userPassword('Password123')
    practiceAutomationLoginPage.submitButton()


});
Then(/^I verify the new url and logging message$/, function () {
    cy.url().should('contain','https://practicetestautomation.com/logged-in-successfully/')
   practiceAutomationLoginPage.elements.loginMessage().should('have.text','Logged In Successfully')
});
Then(/^The log out is displayed in new page$/, function () {
    practiceAutomationLoginPage.elements.logout().should('have.text','Log out')
});




When(/^I provide incorrect credentials, and clicks on the login button$/, function (datatable) {
    datatable.hashes().forEach((row)=>{
        cy.log(row.username)
        cy.log(row.password)
        practiceAutomationLoginPage.submit(row.username,row.password)
    })

});
Then(/^The invalid message "([^"]*)" is displayed$/, function (errorMessage) {
    practiceAutomationLoginPage.elements.ErrorMessage().should('have.text', errorMessage)
});
