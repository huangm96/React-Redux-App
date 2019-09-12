import axios from 'axios';

export const ADD_NAME = "ADD_NAME";
export const addName = name => {
  return { type: ADD_NAME, payload: name };
};


export const FETCHING_GENDER_START = "FETCHING_GENDER_START";
export const FETCHING_GENDER_SUCCESS = "FETCHING_GENDER_SUCCESS";
export const FETCHING_GENDER_FAILURE = "FETCHING_GENDER_FAILURE";

export const getGender = (name) => (dispatch) => {
    console.log(name)
    dispatch({ type: FETCHING_GENDER_START  });
    axios 
        .get(`https://api.genderize.io?name=${name}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_GENDER_SUCCESS, payload: res.data});
        }).catch(err => {
        console.log(err)
    })
}