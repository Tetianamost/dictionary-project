import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="Definitions">
            <strong>Definition:</strong> {definition.definition}
            <br />
            <em> {definition.example}</em> <br />
          </div>
        );
      })}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}