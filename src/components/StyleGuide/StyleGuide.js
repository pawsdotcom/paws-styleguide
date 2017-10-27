import React, { Component } from 'react'
import './StyleGuide.css'

export default class StyleGuide extends Component {
  render () {
    return (
      <div>
        <header styleName='header'>
          <h1 styleName='heading'>Paws style guide</h1>
        </header>
        <main styleName='main'>
          <section styleName='content'>
            <h1>H1. The champion of longer lives for pets</h1>
            <h2>H2. The champion of longer lives for pets</h2>
            <h3>H3. The champion of longer lives for pets</h3>
            <h4>H4. The champion of longer lives for pets</h4>
            <h5>H5. The champion of longer lives for pets</h5>
            <h6>H6. The champion of longer lives for pets</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
        </main>
      </div>
    )
  }
}
