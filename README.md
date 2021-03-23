# Dandy

Fundraising Team acceptance test tool

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