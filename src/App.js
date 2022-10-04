import logo from "./logo2.svg";
import "./App.css";
import Dictionary from "./Dictionary";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container"
      >
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="life" />
        </main>
        <footer className=" text-center my-2 text-muted">
          <small>
            <em>
              ©&nbsp;
              <a
                href="https://github.com/Tetianamost/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                Coded
              </a>
              &nbsp; by Tetiana Mostova. All rights reserved.
            </em>
          </small>
        </footer>
      </motion.div>
    </div>
  );
}
