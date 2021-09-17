import { CREATE, FETCH_ALL, START_LOADING, END_LOADING, 
    SET_SELECTED_MONTH, SET_AMOUNT, ADD_ITEM } from '../constants/actionTypes';

const initialState = {
    isLoading: true,
    months: [],
    selected: false,
    selectedDetail: false,
}

function month(state = initialState, action) {
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
            return {
                ...state,
                months: [...state.months, action.payload.data],
                selected: action.payload.data
            };
        case FETCH_ALL: // only occurs when user logs in
            return { 
                ...state,
                months: action.payload.data
            };
        case SET_SELECTED_MONTH:
            return {
                ...state,
                selected: action.payload,
            }
        case SET_AMOUNT:
            return {
                ...state,
                selected:  {
                    ...state.selected,
                    monthBudget: action.payload
                }
            }
        case ADD_ITEM:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    details: action.payload
                },
                 
            }
        default:
            return state;
    }
};

export default month;