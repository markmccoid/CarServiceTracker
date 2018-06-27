//This file will hold the intermediate API between redux thunks and firebase
import database from '../firebase/firebase';

//============================================
//-Initialize App Data
//============================================
export const initializeData = (uid) => {
  return database.ref(`users/${uid}`).once('value')
    .then((snapshot) => {
      const { services, cars } = snapshot.val() || { services: {}, cars: {} };
      let servicesArray = [];
      let carsArray = [];
      if (cars) {
        carsArray = Object.keys(cars).map(carId => ({ id: carId, ...cars[carId] }));
      }
      if (services) {
        servicesArray = Object.keys(services).map(serviceId => ({ id: serviceId, ...services[serviceId] }));
      }
      return { servicesArray, carsArray };
    });
};


//============================================
//-CARS Database Calls
//============================================
/**
 *
 * @param {string} uid - Users id once authenticated with firebase
 * @param {object} carObj - Car object to add
 * @returns {string} ref.key - return the new key (carid) created by firebase
 */
export const addCar = (uid, carObj) => database.ref(`users/${uid}/cars`).push(carObj)
  .then(ref => ref.key);

//EDIT CAR
export const editCar = (uid, id, carObj) => database.ref(`users/${uid}/cars/${id}`).update(carObj);

//REMOVE CAR
export const removeCar = (uid, id) => database.ref(`users/${uid}/cars/${id}`).remove();

//LOAD CARS
export const loadCars = uid => database.ref(`users/${uid}/cars`).once('value')
  .then((snapshot) => {
    const carData = snapshot.val() || {};
    const cars = Object.keys(carData).map(carId => ({ id: carId, ...carData[carId] }));
    return cars;
  })
  .catch(err => console.log('Error loading cars', err));
//============================================
//-SERVICE Database Calls
//============================================
// ADD SERVICE
export const addService = (uid, serviceObj) => database.ref(`users/${uid}/services`).push(serviceObj)
  .then(ref => ref.key)
  .catch(err => console.log(`AddService Error: ${err}`));

// REMOVE SERVICE
export const removeService = (uid, id) => database.ref(`users/${uid}/services/${id}`).remove();

// EDIT SERVICE
export const editService = (uid, id, sericeUpdates) => database.ref(`users/${uid}/services/${id}`).update(sericeUpdates);
