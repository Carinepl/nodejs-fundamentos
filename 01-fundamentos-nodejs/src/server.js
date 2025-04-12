import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
const {method, url} = req
if(method == 'GET' && url == '/users') {
  return res
  .setHeader('Content-type', 'application/json')
  .end(JSON.stringify(users))
}

if(method == 'POST' && url == '/users') {
  users.push({
    id:1,
    name:'Carine Lima',
    email:'carinelima@email.com'
  })

  return  res.end('Criacao de usuarios')
}

  return res.end('Hello Guys')

})

server.listen(3333)