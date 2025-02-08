Feature: API REST Testing with JSONPlaceholder

  Scenario: Fetch all users with GET request
    Given a GET request is made to "/users"
    Then the response status should be 200
    And the response should contain a list of users

  Scenario: POST request with empty fields should return 400
    Given a POST request is made to "/users" with body:
      | name                 | email                  |
      | ""                   | ""                     |
    Then the response status should be 400

  Scenario: Simulate server error returning 500
    Given a GET request is made to "/users/server-error"
    Then the response status should be 500
