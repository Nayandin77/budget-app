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
                // {

                // }
                months: action.payload.data 
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