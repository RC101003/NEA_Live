import React from 'react'
// Import the css
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <nav>
        <h1> Hong Kong Premier League Fantasy Football </h1>
        <button>
          <span class="button_top">
              <a href="home.html">Home</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="squad-selection.html">Squad Selection</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="login.html">Login</a>
          </span>
        </button>
        <button>
          <span class="button_top">
              <a href="howToPlay.html">How-To-Play</a>
          </span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar