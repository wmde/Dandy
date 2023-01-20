# Dandy

Fundraising Team acceptance test tool

## Structure

### The Dandy Class
The Dandy class is a wrapper for Puppeteer that simplifies writing common actions that acceptance tests need to perform. It includes the following methods:

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

Each of these methods adds an asynchronous anonymous function to a list which are then run in sequence by invoking the `run()` method.

### Config
The configuration files are javascript objects that contain various options for running tests. This includes items such as URLS, element selectors, language keys.

### Pages
The files in pages are wrappers for the Dandy class. They exist to make the tests more explicit and easy to read and write. The general rule is to have a single page file for each tested page.

In the case of Banners there is a single page.

These files contain classes with methods, each method performs an interaction. Think of it as something a user would do for example click a link, type into an input box or submit a form.

### Tests
This folder contains the tests. The rule is one test per file.

## How To Use

### Running Tests on Spenden

1. To run all the tests run `$ npm run dandy`
2. To run a selection of tests list them `$ npm run dandy pages-exist amount-options-exist`

**Note:** There's an issue with live feedback at the moment because of how the files are run through exec. I'm looking into it but in the meantime if you want live feedback then you can run a single file with the following command:

`$ node ./tests/pages-exist.js`

### Running Banner Tests

1. To run a tests on a banner you can run `$ npm run dandy [TEST NAMES] -- -b [BANNER NAME]`
2. To run tests using your local development environment you pass a `-d` flag for example: `$ npm run dandy [TEST NAMES] -- -b [BANNER NAME] -d`
3. To see tests running in Chromium you pass a `-h` flag for example: `$ npm run dandy [TEST NAMES] -- -b [BANNER NAME] -h`

## Writing New Tests
Please look through the existing tests to see how they're structured.

If you want to add a new Spenden test you add it in the `tests` folder. If you want to add a banner test you add it in the `tests/banners` folder.

To make a new test, first you add a new javascript file in the correct folder, or copy an existing one. Each test instantiates a page object and uses that to run actions. The flow is `Create Page > Add Actions > Run`.

For example if you want to test a banner field throws an error with the following flow:

1. Create a Banner page.
2. Wait for the banner to appear.
3. Click the close button.
4. See if the banner is hidden.
5. Take a screenshot.

The code would look something like this:

```js
const banner = new Banner(url, selectors, parameters, options);

await banner.waitForBanner()
	.clickMainBannerCloseButton()
	.checkBannerIsHidden()
	.captureScreenshot(`banners/${testConfig.bannerName}/banner-loads.png`)
	.run();
```

## Updating the Pages and Configuration

If you wish to perform an action that doesn't exist in the Page class you can add a new method to do it. The method names should describe the action being taken.

If the new action requires finding an element by class, you should add that class into the selectors in the configuration file for that page.

## Checking Language Items
You can check if the correct language items are being used by importing the json from the node_modules. Before doing so you should make sure the installed module is the latest by running:

`$ npm update fundraising-frontend-content`
