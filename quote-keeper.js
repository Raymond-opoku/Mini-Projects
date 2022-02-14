// test/features/user-visits-root-test.js
/////////////////////////////////
// test/features/user-visits-root-test.js
const {assert} = require('chai');

describe('User visits root', () => {
  describe('posting a quote', () => { 
    it('saves quotes and meta data submitted by the user', () => {
    
      // Setup
      const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
      const attributed = 'Marianne Williamson';
      const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';
      // Exercise
      browser.url('/');
      browser.setValue('#quote', quote);
      browser.setValue('#attributed', attributed);
      browser.setValue('#source', source);
      browser.click('input[type=submit]');
      // Verify
      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
    });
  });
});
///////////////////////////////////////////////////////////////////////////////////////////
// test/routes/index-test.js
// test/routes/index-test.js
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe('/',()=>{
  describe('POST',()=>{
    it('creates a new message',async()=>{
      const quote= 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
      const attributed='Marianne Williamson'
      const source='A Return to Love: Reflections on the Principles of A Course in Miracles';
      const response=await request(app)
      .post('/')
      .type('form')
      .send({quote,attributed,source});
      assert.equal(response.status,200);
      assert.include(parseTextFromHTML(response.text, '#quotes'), quote);
        assert.include(parseTextFromHTML(response.text, '#quotes'), attributed);
        assert.include(parseTextFromHTML(response.text, '#quotes'), source);

    })
  })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////
<!-- views/index.handlebars -->
<!-- public/index.html -->

<!-- views/index.handlebars -->
<!-- public/index.html -->
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title></title>
</head>

<body>
  <section id="quotes">{{quote}}-{{attributed}}-{{source}}
  </section>

  <form action="/" method="post">
    <label for="attributed">Attributed to:</label>
    <input id="attributed" name="attributed">

    <label for="source">From:</label>
    <input id="source" name="source">

    <label for="quote">Quote:</label>
    <textarea id="quote" name="quote"></textarea>

    <input type="submit" name="submit">
  </form>
</body>

</html>
////////////////////////////////////////////////
// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
   const {source, attributed, quote} = req.body;
    res.render('index',{source, attributed, quote});
   
});
router.get('/',(req,res)=>{
  res.render('index')
})

module.exports = router;
