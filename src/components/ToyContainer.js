import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList }) {
// FETCH TOY LIST DATA FROM JSON
  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(data => setToyList(data))
  }, [])
// FUNCTION TO FILTER THROUGH ARRY TO REMOVE DELETED CARDS
  function removeToy(toyId) {
    setToyList(toyList.filter(toy => toy.id !== toyId));
  }
// FUNCTION TO CHANGE TOY LIKES
  function changeToy(updatedToy) {
    setToyList(toyList.map(toy => toy.id === updatedToy.id ? updatedToy : toy))
  }
// MAP THROUGH TOY ARRAY AND MAKE TOY CARD
  const mappedToys = toyList.map(toy => <ToyCard key={ toy.id } toy={ toy } removeToy={ removeToy } changeToy={ changeToy } />)
  return (
    <div id="toy-collection">{mappedToys}</div>
  );
}

export default ToyContainer;
