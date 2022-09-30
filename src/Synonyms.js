import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length <= null) {
    return null;
  } else {
    return (
      <ul className="Synonyms list-inline mt-3 text-center">
        <strong>Synonyms: </strong> <br />
        {props.synonyms.map(function (synonym, index) {
          return (
            <li className="list-inline-item" key={index}>
              · {synonym}
            </li>
          );
        })}
      </ul>
    );
  }
}
