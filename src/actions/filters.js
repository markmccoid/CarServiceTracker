//--------------------------
//--Filter Action creators
//--------------------------
import { SET_TEXT_FILTER, SET_CAR_FILTER, SORTBY_DATE, SORTBY_AMOUNT, SET_START_DATE, SET_END_DATE } from './actionTypes';

// SET_TEXT_FILTER
export const setTextFilter = (text) => {
  return {
    type: SET_TEXT_FILTER,
    text
  };
};

//-- SET_CAR_FILTER ----------
export const setCarFilter = (carId) => {
  return {
    type: SET_CAR_FILTER,
    carId
  };
};

//SORTBY
export const sortByDate = () => ({type: SORTBY_DATE});

export const sortByAmount = () => ({type: SORTBY_AMOUNT});

//START END DATES
export const setStartDate = (startDate = undefined) => (
  {
    type: SET_START_DATE,
    startDate
  }
);

export const setEndDate = (endDate = undefined) => (
  {
    type: SET_END_DATE,
    endDate
  }
);
