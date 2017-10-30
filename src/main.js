import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'components/Button/Button'

class App extends React.Component {
  render () {
    return (
      <div>
        <h3>Buttons</h3>
        <Button color='archangel'>archangel button</Button><br /><br />
        <Button color='setter'>setter button</Button><br /><br />
        <Button color='corgi'>corgi button</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
