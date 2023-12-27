import React from "react";
import { useState } from "react"



function ToyForm() {

  const [formData, setFormData] = useState({
    name:"Suzy",
    image: "alt",
    likes: 0
  })

  function handleNameChange(e){
    console.log(e.target.value)
    setFormData({
      ...formData,
      name: e.target.value,
    });
}

function handleImageChange(e){
  console.log(e.target.value)
  setFormData({
    ...formData,
    image: e.target.value,
  });
}

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(formData)
    })
    
  }
console.log(formData)

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleNameChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleImageChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
