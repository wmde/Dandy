# Dandy

Fundraising Team acceptance test tool

## How to use

### Running the tests

1. To run all the tests run `$ npm run dandy`
2. To run a selection of tests list them `$ npm run dandy pages-exist amount-options-exist`

**Note:** There's an issue with live feedback at the moment because of how the files are run through exec. I'm looking into it but in the meantime if you want live feedback then you can run a single file with the following command:

`$ node -r esm ./tests/pages-exist.js`

### Writing a new test
Add a new file in the tests folder, or copy an existing one and modify it for your needs. There are 2 prerequisites you need per test, you need to start with `goToPage( "/my-url" )` and finish with `run()`.

### Available Commands
* `goToPage( url: string )`
* `captureScreenshot( filePath: string )`
* `waitForElement( selector: string )`
* `checkElementExists( selector: string )`
* `checkElementDoesNotExist( selector: string )`
* `checkElementContainsText( selector: string text: string )`
* `setInputText( selector: string text: string )`
* `selectOption( selector: string option: string )`
* `click( selector: string )`
* `clickSubmit( selector: string )`
* `blur( selector: string )`
* `wait( milliseconds: int )`

# Checking Language Items
You can check if the correct language items are being used by importing the json from the node_modules. Before doing so you should make sure the installed module is the latest by running:

`$ npm update fundraising-frontend-content`
