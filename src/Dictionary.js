import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState();
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}
`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control px-5 py-2 border border-success rounded-pill"
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint mt-1 ms-2">
            <i className="fa-regular fa-heart m-1"></i>
            suggested words: life, breeze, mind, soul
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
