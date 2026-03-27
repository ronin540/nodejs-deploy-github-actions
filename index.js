import express from "express"

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    return res.json({msg : "Hello from server"})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} with git actions yayay`)
} )