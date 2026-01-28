# Description
The objective of this project is to validate the login mechanism of the-internet.herokuapp.com using the Page Object Model (POM) design pattern. It includes both positive and negative test scenarios to ensure application stability and proper error handling.

-> Page Object Model (POM): Implemented POM to separate test logic from page-specific code, improving readability and maintainability.

-> Playwright Built-in Locators: Utilized user-facing locators (e.g., getByRole, getByLabel) rather than CSS or XPath. This ensures tests are resilient to implementation changes and encourages accessibility best practices.

-> Strict Test Isolation: deliberately avoided global setup/teardown in favor of fresh BrowserContexts for every test. This ensures zero state leakage (cookies/storage) between tests and guarantees that tests can be executed in any order without dependencies.

# Application Under Test: 
[The Internet - Login Page](https://the-internet.herokuapp.com/login)

# Tech Stack
Framework: Playwright
Language: TypeScript
Package Manager: npm
Reporter: HTML / List

# Setup Instruccions
1- Open the project on vs code(Preferably).
2- On the terminal type  **"npm install"** (this will install all dependencies for this project).
3- Install the playwright browsers by typing **"npm playwright install"** on the terminal

# Execution Steps 
 To execute this project on the terminal type **"npx playwright test"** -> This command will execute all the tests.
 **"npx playwright test login-test"**  this will execute only the test located inside the login-test file. 
 **"npx playwright test assesment-test"** this will execute only the tests located inside the assesment-test file.
 **"npx playwright test --grep-invert="@login" "** this will excute only the tests without the login tag.
 **"npx playwright test --grep="@login" "** this command will execute only the test with the login tag.
 All tests will be executed headless if you want to see an UI Run please use the command **"npx playwright test --ui"**

# To view Reports
npx playwright show-report
# Test Scenarios
ID,Type,Scenario,Expected Outcome
TC01,Positive,Successful Login,User is redirected to the secure area; Success message appears.
TC02,Negative,Invalid Username,"Login fails; ""Your username is invalid!"" error message appears."
TC03,Negative,Invalid Password,"Login fails; ""Your password is invalid!"" error message appears."
TC04,Positive,Assesment Page verification, All elements of the page are visible.
TC05,Positive,Log out verification, Succesful logout Message appears.
