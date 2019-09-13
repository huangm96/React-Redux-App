import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addName, getGender } from "../store/actions";

const Name = props => {
  const [newName, setNewName] = useState("peter");
  const [firstName, setFirstName] = useState("peter");
  const handleChange = e => {
    setNewName(e.target.value);
  };

  const handleFirstNameInput = e => {
    e.preventDefault();
    setFirstName(newName);
    props.addName(firstName);
  };

  useEffect(() => {
    props.getGender(firstName);
  }, [firstName]);

  return (
    <div className="name-input">
      <h3>Please Enter Your First Name Here:</h3>

      <form className="inputBox" onSubmit={handleFirstNameInput}>
        <input
          name="firstName"
          type="text"
          value={newName}
          onChange={handleChange}
        />
        <button>Enter</button>
      </form>

      <div>
        {props.isFetching ? (
          <h2>LOADING.........</h2>
        ) : (
          <div className="resultBox">
            <p>Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
            <p>Probability: {props.probability}</p>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  
  return {
    name: state.name,
    isEnteredName: state.isEnteredName,
    isFetching: state.isFetching,
    gender: state.gender,
    probability: state.probability
  };
};

export default connect(
  mapStateToProps,
  { addName, getGender }
)(Name);
