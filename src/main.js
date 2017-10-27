import React from 'react'
import ReactDOM from 'react-dom'
import StyleGuide from 'components/StyleGuide/StyleGuide'

class App extends React.Component {
  render () {
    return (
      <StyleGuide />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
