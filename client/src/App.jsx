import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './main.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* create a home page for a football website  */}
      <header className="App-header">
      <body>
    <h1> Hong Kong Premier League Fantasy Football </h1>
    <header>
      <nav>
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
              <a href="how_to_play.html">How-To-Play</a>
          </span>
        </button>
      </nav>
    </header>

    <main>
      <h2>Welcome to Fantasy Football</h2>
      <p>Create your team, join a league and compete with other users!</p>
    </main>

    <footer>
      <p>&copy; 2022 Fantasy Football</p>
    </footer>
  </body>
      </header>
    </div>

  )
}

export default App

