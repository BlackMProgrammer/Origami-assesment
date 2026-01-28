# Description
This is an assessment made by Cristhian De Castro, for the Company Origamy Risk.


# Setup Instruccions
1- Open the project on vs code(Preferably).
2- On the terminal type  **"npm install"** (this will install all dependencies for this project).

# Execution Steps 
 To execute this project on the terminal type **"npx playwright test"** -> This command will execute all the tests.
 **"npx playwright test login-test"**  this will execute only the test located inside the login-test file. 
 **"npx playwright test assesment-test"** this will execute only the tests located inside the assesment-test file.
 **"npx playwright test --grep-invert="@login" "** this will excute only the tests without the login tag.
 **"npx playwright test --grep="@login" "** this command will execute only the test with the login tag.

# Explanation
This project contains multiple files between them a Fixture folder, Tests folder and page objects all separated and properly organized in their folders.

As especified no tests have relationship between them and up to this momment all of them should be good to show unless the page does not properly load.