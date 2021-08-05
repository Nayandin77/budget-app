import { CREATE, FETCH_ALL, START_LOADING, END_LOADING } from '../constants/actionTypes';

function calender(state = { isLoading: true, months: [] }, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE:
            console.log(action.payload.data);
            return {
                ...state,
                months: [...state.months, action.payload.data]
                    // ...state.calender.months,
            };
        case FETCH_ALL:
            
            return { 
                ...state.months, 
                months: action.payload.data 
            };
        default:
            return state;
    }
};

export default calender;