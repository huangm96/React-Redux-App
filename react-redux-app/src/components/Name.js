import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addName, getGender } from "../store/actions";

const Name = props => {
  const [firstName, setFirstName] = useState("peter");
  const handleChange = e => {
    setFirstName(e.target.value);
  };

  const handleFirstNameInput = e => {
    e.preventDefault();
    props.addName(firstName);
  };

  useEffect(() => {
    props.getGender(firstName);
  }, [firstName]);

  return (
    <div className="name-input">
      <input
        name="firstName"
        type="text"
        value={firstName}
        onChange={handleChange}
      />
      <button onClick={handleFirstNameInput}>Enter</button>
      <div>
        {props.isFetching ? (
          <h2>LOADING.........</h2>
        ) : (
          <div>
            {props.name}
            {props.gender}
            {props.probability}
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.name,
    isEnterName: state.isEnterName,
    isFetching: state.isFetching,
    gender: state.gender,
    probability: state.probability
  };
};

export default connect(
  mapStateToProps,
  { addName, getGender }
)(Name);
