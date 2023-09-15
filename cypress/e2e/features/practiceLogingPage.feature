Feature: Practiceautomation login page
Background:
  Given I am in "practicetestautomation" page
  When I navigate to test login page

  Scenario: Successful login
    And I enters the <username>, the <password>, and clicks on the login button
    Then I verify the new url and logging message
    And The log out is displayed in new page

  Scenario: Incorrect username should be not able to login
    When I provide incorrect credentials, and clicks on the login button
      | username      | password    |
      | incorrectUser | Password123 |
    Then The invalid message "Your username is invalid!" is displayed

  Scenario: Incorrect password should be not able to login
    When I provide incorrect credentials, and clicks on the login button
      | username | password          |
      | student  | incorrectPassword |
    Then The invalid message "Your password is invalid!" is displayed





