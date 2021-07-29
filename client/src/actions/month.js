import { START_LOADING, FETCH_AMOUNT } from '../constants/actionTypes';
import * as api from '../api/index';

export const getAmount = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchAmount(id);

        dispatch({ type: FETCH_AMOUNT, payload: { amount: data } });
    } catch (error) {
        console.log(error);
    }
}