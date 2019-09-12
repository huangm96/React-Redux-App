import {
  ADD_NAME,
  FETCHING_GENDER_START,
  FETCHING_GENDER_SUCCESS
} from "../actions";
const initialState = {
    name: '',
    isEnteredName: false,
    isFetching: false,
    error: '',
    gender: '',
    probability: '',
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_NAME:
        
        return {
          ...state,
          name: action.payload,
          isEnteredName: true
        };
        case FETCHING_GENDER_START:
            
        return {
          ...state,
          isFetching: true,
          error: ""
        };
        case FETCHING_GENDER_SUCCESS:
            console.log(state);
             console.log(action);
        return {
          ...state,
            name: action.payload.name,
            gender: action.payload.gender,
          probability:action.payload.probability,
          isFetching: false
        };
      default:
        return state;
    }
}