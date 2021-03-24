const React = require('react')
const ReactDOMServer = require('react-dom/server')

class App extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello World!')
  }
}

if(typeof document !== 'undefined') {
  const mountNode = document.getElementById('dynamic')

  ReactDOM.hydrate(React.createElement(App), mountNode)
}

const html = ReactDOMServer.renderToString(React.createElement(App))

module.exports.html = html
