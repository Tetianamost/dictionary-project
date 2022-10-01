import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <audio src={props.phonetics.audio} controls />
      <span className="text-muted pronoun ">{props.phonetics.text}</span>
    </div>
  );
}
