Feature: Leaderboard
    In order to determine the open source champion
    As a user
    I want to be able to see those with the highest scores and the most wins

    Scenario: Viewing github users sorted by wins
        Given I am on the leaderboard page
        And I select "Sort By Wins"
        Then I should see github users sorted by number of wins
    
