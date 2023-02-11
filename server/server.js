import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.json({ msg: 'server running', success: true })
})

app.listen(port, (err) => {
    if(!err) console.log('nice life man.')
})
