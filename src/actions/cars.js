import * as databaseAPI from '../database/firebaseAPI';

import { ADD_CAR, EDIT_CAR, REMOVE_CAR, SET_CARS } from './actionTypes';

//--------------------------
// --Expenses Action creators
//--------------------------
// ADD_EXPENSE
export const addCar = (carObj = {}) => ({
  type: ADD_CAR,
  carObj,
});

export const startAddCar = (carObj = {}) => (dispatch, getState) => {
  const { uid } = getState().auth;
  databaseAPI.addCar(uid, carObj)
    .then((carid) => {
      dispatch(addCar({
        id: carid,
        ...carObj,
      }));
    });
};

// EDIT EXPENSE
export const editCar = (id, carObj) => ({
  type: EDIT_CAR,
  id,
  carObj,
});

export const startEditCar = (id, carObj) => (dispatch, getState) => {
  const { uid } = getState().auth;
  return databaseAPI.editCar(uid, id, carObj)
    .then(() => dispatch(editCar(id, carObj)));
};

// REMOVE EXPENSE
export const removeCar = id => ({
  type: REMOVE_CAR,
  id,
});

export const startRemoveCar = id => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log('removing car', id)
    return databaseAPI.removeCar(uid, id)
      .then(() => dispatch(removeCar(id)));
  };
};

// SET CARS
export const setCars = cars => ({
  type: SET_CARS,
  cars,
});

export const startSetCars = () => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    return databaseAPI.loadCars(uid)
      .then((cars) => {
        dispatch(setCars(cars));
      });
  };
};
