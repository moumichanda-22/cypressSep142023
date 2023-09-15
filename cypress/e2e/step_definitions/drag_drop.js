import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {dragDrop} from "@pages/dragAndDrop";

When(/^I navigate to Drag and Drop Page$/, function () {
    dragDrop.navigateToThePage()
});

When(/^I drag the source element to the target element$/, function () {
    dragDrop.dragToTheTarget()

});
Then(/^I should see the element has been dropped successfully$/, function () {
    dragDrop.droppedToTheTarget()

});
