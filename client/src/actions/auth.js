import { AUTH, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    // Must be first since AUTH state needs to be done before next dispatch
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    const email = {"userEmail": data.result.email};
    const months = await api.getMonths(email);
    dispatch({ type: FETCH_ALL, payload: months });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
