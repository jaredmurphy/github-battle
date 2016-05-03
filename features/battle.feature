Feature: Battle
    In order to compete to be the open source champion
    As a user
    I want to initiate a battle between two Github users

    Scenario: Initiating a Batttle
        Given I am on the battle page
        And I fill in "Player One" with a username
        And I fill in "Player Two" with a username
        And I press "Confirm Battle"
        Then I should see the results of the battle
        And I should see that either player one or player two is the winner
        And I should see the scores from player one and player two

        
