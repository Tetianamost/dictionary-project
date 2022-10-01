import logo from "./logo2.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="life" />
        </main>
        <footer className=" text-center text-muted">
          <small>
            <em>
              <a
                href="https://github.com/Tetianamost/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                Coded
              </a>
              &nbsp; by Tetiana Mostova
            </em>
          </small>
        </footer>
      </div>
    </div>
  );
}
