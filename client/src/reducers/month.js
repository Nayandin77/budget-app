import { CREATE, FETCH_ALL } from '../constants/actionTypes';

export default (state = { isLoading: true, months: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case CREATE:
            return { 
                ...state.months,
                month: action.payload.data 
            };
        case FETCH_ALL:
            console.log("Called FETCH_ALL function");
            return { 
                ...state.months, 
                months: action.payload.data 
            };
        default:
            return state;
    }
};