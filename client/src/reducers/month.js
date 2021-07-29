import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_AMOUNT, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (state = { isLoading: true, month: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case FETCH_AMOUNT:
            return { ...state, amount: action.payload.data };
        default:
            return state;
    }
};