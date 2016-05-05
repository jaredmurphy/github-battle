Feature: View User Page
    In order to learn more about a github user
    As a user
    I want to be able to view individual user pages

    Scenario: Viewing User's Page from Leaderboard
        Given I am on an individual user's page
        Then I should see the user's "High Score" 
        And I should see the user's "Battles Won"
        And I should see the user's username
        And I should see the users' Github url
