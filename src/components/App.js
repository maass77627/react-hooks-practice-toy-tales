import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((json) => {console.log(json)
    setToys(json)
    })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function deleteToy(id) {
    console.log(id)
    setToys(toys.filter((toy) => toy.id !== id))
    //const newToys = toys.filter((toy) => {toy.id !== id})
    //setToys(newToys)
  }

  console.log(toys)
  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer deleteToy={deleteToy} toys={toys}/>
    </>
  );
}

export default App;
