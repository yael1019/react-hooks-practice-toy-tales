import React from "react";

function ToyForm({ form, setForm, handleSubmit }) {
// FUNCTION TO RESET STATE FOR FORM
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={ handleSubmit } >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={ form.name }
          onChange={ handleChange }
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={ form.image }
          onChange={ handleChange }
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
