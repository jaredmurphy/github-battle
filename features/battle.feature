@wip
Feature: Battle
    In order to compete to be the open source champion
    As a user
    I want to initiate a battle between two Github users

    Background:
        Given I am on the "/battle" page

    Scenario: Initiating a Batttle
        And I fill in "player_one" with "jaredmurphy"
        And I fill in "player_two" with "bryanmytko"
        And I press "Confirm Battle"
        Then I should see "The Winner is" 
        And I should see that either "jaredmurphy" or "bryanmytko" is the winner
        And I should see the scores from player one and player two

        
