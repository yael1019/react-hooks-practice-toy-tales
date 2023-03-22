import React from "react";

function ToyCard({ toy, removeToy, changeToy }) {
// FUNCTION FOR DELETE REQUEST
  const handleDelete = toyId => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(() => removeToy(toyId))
  }
// FUNCTION FOR PATCH REQUEST
  const handleLike = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({likes: toy.likes + 1})
    })
      .then(resp => resp.json())
      .then(data => changeToy(data))
  }
  return (
    <div className="card">
      <h2>{ toy.name }</h2>
      <img
        src={ toy.image }
        alt={ toy.name }
        className="toy-avatar"
      />
      <p>{ toy.likes } Likes </p>
      <button className="like-btn" onClick={ () => handleLike(toy.id) } >Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(toy.id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
