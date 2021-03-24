const DEFAULT_PORT = 8080

const { exec } = require("child_process")
const fs = require('fs')
const http = require('http')

const { html } = require('../app/app')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/javascript'})

  const { url } = req || {}

  if(url === '/html') {
    res.write(html)
    res.end()
  }

  if(url === '/bundle.js') {
    exec('npm run build')

    fs.readFile(`${process.cwd()}/app/dist/main.js`, function(err, data) {
      if(err) {
        console.error('Error: ', err)
      } else {
        res.write(data.toString())

        res.end()
      }
    })
  }
}).listen(DEFAULT_PORT);
