import { START_LOADING, CREATE, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index';

export const getMonths = (userEmail) => async (dispatch) => {

  try {
    const data = await api.getMonths(userEmail);
    
    dispatch({ type: FETCH_ALL, payload: { data } });  
  } catch (error) {
    console.log(error);
  }
};

export const createMonth = (date) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createMonth(date);
  
      dispatch({ type: CREATE, payload: data });  
    } catch (error) {
      console.log(error);
    }
  };