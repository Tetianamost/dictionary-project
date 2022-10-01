import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="text-center">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="Definitions ">
            <i className="fa-solid fa-book-open fa-lg"></i>{" "}
            <span className="my-1">{definition.definition}</span>
            <div className="example my-1 text-muted">
              <em> {definition.example}</em>{" "}
            </div>
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
