@APITests
Feature: ReqRes In API

  @API_TC001
  Scenario: GET API Request - List Users
    When user sends GET request to list all users
    Then API response status should be 200
    And API response should contain user records

  @API_TC002
  Scenario: POST Request - Create User
    When user sends POST request to create a new user
    Then API response status should be 201
    And created user details should match request

  @API_TC003
  Scenario: PUT Request - Update User Full Update
    When user sends PUT request to update user with id 2
    Then API response status should be 200
    And updated user details should match request

  @API_TC004
  Scenario: PATCH Request - Partial Update
    When user sends PATCH request to partially update user with id 2
    Then API response status should be 200
    And patched user job should be "Lead QA Engineer"

  @API_TC005
  Scenario: DELETE Request - Delete User
    When user sends DELETE request to delete user with id 2
    Then API response status should be 204

  @API_TC006
  Scenario: GET with Query Params
    When user sends GET request to list users with page 2
    Then API response status should be 200
    And API response page should be 2
