
Given(/^I am on the "([^"]*)" page$/) do |page|
    visit page
end

Given(/^I press "([^"]*)" link$/) do |link_name|
    click_link link_name
end

