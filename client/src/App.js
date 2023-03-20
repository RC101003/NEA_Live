import LoginButton from "./components/LoginButton.js";
import LogoutButton from "./components/LogoutButton.js";

function App() {
    return (
        <main class="column">
           <h1>Auth0 Login</h1>
           <LoginButton />
            <LogoutButton />
        </main>
    );
}

export default App;