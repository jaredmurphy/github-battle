Feature: Recent Battles
    In order to see who is active on the site
    As a user
    I want to see the most recent battles

    Scenario: Viewing recent battles
        Given I am on the recent battles page
        Then I should see recent battles sorted by created date
