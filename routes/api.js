var express = require('express');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/* Set up swagger for documentation */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Open http://<app_host>:<app_port>/api/api-docs in your browser to view the documentation.
// If you want to set up routing based on the swagger document checkout swagger-express-router
// See https://www.npmjs.com/package/swagger-ui-express 

/* Generate Test Data */
let testData = [{
  "name" : "Bed 1",
  "data1" : "A",
  "data2" : "B",
  "HCA Requested" : "C"
  },
  {
  "name" : "Bed 2",
  "data1" : "A",
  "data2" : "B",
  "HCA Requested" : "C"
  }];

/* Overview Api */
router.get('/1_to_16', (req, res, next)=> {
  res.status(200).send(testData)
})

/* Export Module*/
module.exports = router;
