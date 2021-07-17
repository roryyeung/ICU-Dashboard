// Set up dependencies
const express = require('express')
const app = express();

// Select port
const port = process.env.PORT || 4000;

// Mount express routers
var lobbyRouter = require('./express_routers/lobbyRouter')
var bedspaceRouter = require('./express_routers/bedspaceRouter')
var nurseStationRouter = require('./express_routers/nurseStationRouter')

app.use('/lobby', lobbyRouter)
app.use('/bedspace', bedspaceRouter)
app.use('/nursestation', nurseStationRouter)

// Serve Static Assets
app.use(express.static('public'));
// Virtual Path Prefix '/static'
app.use('/static', express.static('public'))

// Initialise listening to port
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
})