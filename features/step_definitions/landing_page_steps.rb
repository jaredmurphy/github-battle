Given(/^I am on the home page$/) do
    visit "/"
end

Then(/^I should see "([^"]*)"$/) do |content|
    expect(page).to have_content content
end

Then(/^I should see link "([^"]*)"$/) do |link_name|
    expect(page).to have_link link_name
end
