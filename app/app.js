const React = require('react')
const server = require('react-dom/server')
const { hydrate } = require('react-dom')
class App extends React.Component {
  render() {
    const { serverText = '' } = this.props
    const isServer = typeof document === 'undefined'

    return React.createElement('div', {
      onClick: () => { window.alert('CLICKED!!') },
      style: {
        position: 'absolute',
        backgroundColor: 'red',
        top: 0,
        width: '50rem',
        height: '50rem',
        zIndex: '10',
      },
    }, `Server: ${isServer ? serverText : 'Client Text'}`)
  }
}

if(typeof document !== 'undefined') {
  const mountNode = document.getElementById('dynamic')

  hydrate(React.createElement(App, {}), mountNode)
}

const html = server.renderToString(React.createElement(App, { serverText: 'Server Text' }))

module.exports.html = html
