import { CREATE, FETCH_ALL, START_LOADING, END_LOADING } from '../constants/actionTypes';

const initialState = {
    isLoading: true,
    months: [],
    selected: false,
}

function calender(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { 
                ...state, 
                isLoading: true 
            };
        case END_LOADING:
            return { 
                ...state, 
                isLoading: false 
            };
        case CREATE: // only occurs when user selects a date not in user records
            console.log(action.payload.data);
            return {
                ...state,
                months: [...state.months, action.payload.data],
                selected: action.payload.data
            };
        case FETCH_ALL: // only occurs when user logs in
            console.log(action.payload.data);
            return { 
                // ...state.months = action.payload.data
                ...state,
                months: action.payload.data
            };
        default:
            return state;
    }
};

export default calender;