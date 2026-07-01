@login @allure.label.feature:Login
Feature: Login

 @TC001 @ValidateLogin
    Scenario: Verify login and logout
      Given user launches the application       
      When user enters username
      And user enters password
      And user clicks login button
      Then user should be logged in successfully
      When user clicks logout button
      Then login page should be displayed

@TC003 @ValidateLogin
Scenario:Verify Login as admin
Given user launches the application
When user logs in as admin
Then user should be logged in successfully

