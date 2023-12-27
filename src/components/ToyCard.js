import React from "react";

function ToyCard({toy, deleteToy}) {

  const body = JSON.stringify({likes: toy.likes + 1})

  function handleLike(id) {
    console.log(id)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body
     // body: JSON.stringify({ likes: toy.likes + 1})
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  }

  function handleDelete(id) {
    console.log(id)
    fetch(`http://localhost:3001/toys/${id}`, {
    method: "DELETE",

  })
    deleteToy(id)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={() => handleLike(toy.id)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => handleDelete(toy.id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
