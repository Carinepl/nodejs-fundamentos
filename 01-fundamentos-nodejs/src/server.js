import  http  from 'node:http'
import { json } from './middlewares/json.js'
import { DataBase } from './middlewares/database.js'

const database = new DataBase()

const server = http.createServer(async(req, res) => {
const {method, url} = req

await json(req, res)

if(method == 'GET' && url == '/users') {
  return res
  .setHeader('Content-type', 'application/json')  
  .end(JSON.stringify(users))
}

if(method == 'POST' && url == '/users') {
const {name, email} = req.body

  const user = {
    id:1,
    name,
    email,
  }

  database.insert('users', user)

  return  res.writeHead((201)).end()
}

  return res.writeHead(404).end()

})

server.listen(3333)