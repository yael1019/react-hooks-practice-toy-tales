import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
// SET STATE FOR TOY LIST
  const [toyList, setToyList] = useState([]);
// SET STATE FOR FORM
  const [form, setForm] = useState({
    name: '',
    image: ''
  })
// FUNCTION TO HANDLE FORM SUBMIT
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        ...form,
        likes: 0
      })
    })
      .then(resp => resp.json())
      .then(data => setToyList([...toyList, data]))
    setForm({
      name: '',
      image: ''
    })
  }
 
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm form={ form } setForm={ setForm } handleSubmit={ handleSubmit } /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={ toyList } setToyList={ setToyList } />
    </>
  );
}

export default App;
