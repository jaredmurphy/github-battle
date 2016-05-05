
Given(/^I fill in "([^"]*)" with "([^"]*)"$/) do |field, value|
    fill_in(field, :with => value)
end

Given(/^I press "([^"]*)"$/) do |button|
end

Then(/^I should see that either "([^"]*)" or "([^"]*)" is the winner$/) do
|playerOne, playerTwo|
end

Then(/^I should see the scores from player one and player two$/) do
end
