Feature: Login Functionality

Background: 
Given user launches the application

@TC001 @ValidateLogin
Scenario: Verify login and logout
When user enters username
And user enters admin password
And user clicks login button
Then dashboard page should be displayed
When user logs out
Then login page should be displayed

@TC002 @ValidateLogin
Scenario: Verify Login as admin
When user logs in as admin
Then dashboard page should be displayed
When user opens admin page
Then admin page should be displayed

@TC003 @InvalidLogin
Scenario Outline: Verify login with invalid credentials
When user enters "<username>" username
And user enters "<password>" password
And user clicks login button
Then error message "<error_message>" should be displayed
Examples:
| username     | password     | error_message                |
| invalid_user | invalid_pass | Invalid credentials          |
| test123      | test456      | Invalid credentials          |
