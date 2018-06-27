import uuid from 'uuid';
import * as databaseAPI from '../database/firebaseAPI';
import { SET_SERVICES, ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from './actionTypes';
//--------------------------
// --Services Action creators
//--------------------------
// ADD SERVICE
export const addService = (serviceObj) => {
  return {
    type: ADD_SERVICE,
    serviceObj
  };
};

export const startAddService = (serviceObj) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    databaseAPI.addService(uid, serviceObj)
      .then(serviceId => dispatch(addService({
        id: serviceId,
        ...serviceObj
      })));
  };
};

// EDIT EXPENSE
export const editService = (id, serviceObj) => {
  return {
    type: EDIT_SERVICE,
    id,
    serviceObj
  }
};

export const startEditService = (id, serviceObj) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    databaseAPI.editService(uid, id, serviceObj)
      .then(() => dispatch(editService(id, serviceObj)));
  };
};

// REMOVE EXPENSE
export const removeService = (id) => {
  return {
    type: REMOVE_SERVICE,
    id
  };
};

export const startRemoveService = (id) => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    databaseAPI.removeService(uid, id)
      .then(() => dispatch(removeService(id)));
  };
};

// Set services
export const setServices = (services) => {
  return {
    type: SET_SERVICES,
    services
  };
};
