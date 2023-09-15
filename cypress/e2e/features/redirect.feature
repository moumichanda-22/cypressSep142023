Feature: Redirection Test

  Background: Given I am in "testpages.eviltester" page
    When I navigate to Redirect Test Page

  Scenario: Verify the redirection
    And I click on the first redirect button
    Then I should be redirected to the new page

