const express = require('express')
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'be3868ebb6ce4abf8f94b8023047fe09',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/api/bananas', (req, res) => {
   try {
      banana()
   } catch (theseHands){
      rollbar.error(theseHands)
   }
})

app.get('/api/oranges', (req, res) => {
   try {
      oranges()
   } catch (theseHands){
      rollbar.critical(theseHands)
   }
})

app.get('/api/apples', (req, res) => {
   try {
      apples()
   } catch (theseHands){
      rollbar.warning(theseHands)
   }
})

app.get('/api/endpoint', (req, res) => {
   try {
      clickHandler2()
   } catch (theseHands) {
      rollbar.critical(theseHands)
   }
})

app.use(express.static(`${__dirname}/public`))

app.listen(4000,
   () => console.log(`server running on 4000`)
)