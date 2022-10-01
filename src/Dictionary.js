import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState();
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}
`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    const pexelApiKey =
      "563492ad6f91700001000001ae9e44fc332c4a119ec1f8c57d068573";
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
          <h4 className="mb-4 font-weight-bold text-center">
            What word do you want to look up?
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control px-5 py-2 border border-success rounded-pill"
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint mt-1 ms-2">
            <i className="fa-regular fa-heart m-1"></i>
            suggested words: life, breeze, mind, soul
          </div>
        </section>
        <Results results={results} />
        <aside>
          <Photos photos={photos} />
        </aside>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
