Feature: Landing Page
    Scenario: Navigate around site
        Given I am on the home page
        Then I should see "Welcome to Open Source Champion"
        And I should see link "Battle"
        And I should see link "Leaderboard" 
        And I press "Battle" link
        And I should see "Select Player One"
        And I press "Home" link
        Then I should see "Welcome to Open Source Champion"
        And I press "Leaderboard" link
        Then I should see "Top Users"
        And I press "Home" link
        Then I should see "Welcome to Open Source Champion"



