import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetics.audio} controls autoPlay />
      <span className="text-muted font-weaght-bold">
        {props.phonetics.text}
      </span>
    </div>
  );
}
