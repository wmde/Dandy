# Dandy

Fundraising Team acceptance test tool

## How to use

### Running the tests

1. To run all the tests run `$ npm run dandy`
2. To run a selection of tests list them `$ npm run dandy pages-exist amount-options-exist`

**Note:** There's an issue with live feedback at the moment because of how the files are run through exec. I'm looking into it but in the meantime if you want live feedback then you can run a single file with the following command:

`$ node -r esm ./tests/pages-exist.js`

### Writing a new test
Add a new file in the tests folder, or copy an existing one and modify it for your needs. There are 2 prerequisites you need per test, you need to start with `goToPage( "/my-url" )` and finish with `subscribe( observer )`. Currently, the observer is only set to log the errors and let you know when the test is finished.

### Available Commands
* `goToPage( url: string )`
* `captureScreenshot( filePath: string )`
* `waitForElement( selector: string )`
* `checkElementExists( selector: string )`
* `checkElementDoesNotExist( selector: string )`
* `checkElementContainsText( selector: string text: string )`
* `setInputText( selector: string text: string )`
* `click( selector: string )`
* `blur( selector: string )`
* `delay( milliseconds: int )`

## Tests

* Check each page and make sure they don't 404
* Check donation form for:
    * Each expected field exists
    * Each expected error exists
    * Form submits
    * Form shows correct success page for:
        * Anonymous
        * With address
        * Email only
    
* Check membership form for:
    * Each expected field exists
    * Each expected error exists
    * Form moves to second step
    * Form submits
    * Correct success page is shown
    
## Notes

* Puppeteer:
    * https://github.com/puppeteer/puppeteer/blob/v8.0.0/docs/api.md
    * https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
* Reactive pattern inspired by https://www.youtube.com/watch?v=uQ1zhJHclvs