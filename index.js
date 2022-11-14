// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()

// Add this line below the line that says: const app = express()
app.use(express.json())

// Replace the response line you already have with something like this-
res.json({ data: "response goes here" })

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/command/:message', (req, res) => {
    console.log(req.params)
  res.json({ data: "yo2"})
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})