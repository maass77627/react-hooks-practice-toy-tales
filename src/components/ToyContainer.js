import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy}) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard deleteToy={deleteToy} key={toy.id} toy={toy}/>)}</div>
  );
}

export default ToyContainer;
