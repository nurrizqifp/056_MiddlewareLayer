import 'dotenv/config'
import express from 'express'
import pg from 'pg'
import Joi, { valid } from 'joi'

const app = express()
const port = 3000
const { Pool } = pg
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))