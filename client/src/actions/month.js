import { START_LOADING, CREATE, FETCH_ALL, END_LOADING, 
    SET_SELECTED_MONTH, SET_AMOUNT } from '../constants/actionTypes';
import * as api from '../api/index';

export const getMonths = (userEmail) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const months = await api.getMonths(userEmail);

        dispatch({ type: FETCH_ALL, payload: months.data }); 

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createMonth = (date) => async (dispatch) => {
    try {
        // Signal Loading state
        dispatch({ type: START_LOADING });
        // Create month and send to DB
        const monthData  = await api.createMonth(date);
        // Signal Create state with monthData
        dispatch({ type: CREATE, payload: monthData });  
        // Signal end of Loading state
        dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
};

export const selectMonth = (selected) => async (dispatch) => {
    try {
        dispatch({ type: SET_SELECTED_MONTH, payload: selected });
    } catch (error) {
        console.log(error);
    }
}

export const updateAmount = (amount, month) => async (dispatch) => {
    month.monthBudget = amount;

    try {
        const updatedMonth = await api.updateMonth(month);

        dispatch({ type: SET_SELECTED_MONTH, payload: updatedMonth.data });

        dispatch({ type: SET_AMOUNT, payload: amount });
    } catch (error) {
        console.log(error);
    }
}