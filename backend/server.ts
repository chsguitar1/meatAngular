import *as jsonServer  from 'json-server'
import {Express} from 'express'
import *as fs from 'fs'
import *as https from 'https'
import {handleAuthencation} from './auth'
import {handleAutorization} from './authz'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login',(handleAuthencation))
server.use('/orders',handleAutorization)

server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}
https.createServer(options,server).listen(3001, () => {
  console.log('JSON Server is running rodando na porta 3001')
})
