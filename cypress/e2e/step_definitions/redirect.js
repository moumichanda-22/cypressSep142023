import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {redirect} from "@pages/redirectExample";

When(/^I navigate to Redirect Test Page$/, function () {
    redirect.navigateToTheRedirectPage()

});
When(/^I click on the first redirect button$/, function () {

});
Then(/^I should be redirected to the new page$/, function () {

});
