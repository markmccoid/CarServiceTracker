import * as firebase from 'firebase';


const FB_API_KEY = process.env.REACT_APP_FB_APIKEY;
const FB_AUTHDOMAIN = process.env.REACT_APP_FB_AUTHDOMAIN;
const FB_DATABASEURL = process.env.REACT_APP_FB_DATABASEURL;
const FB_PROJECTID = process.env.REACT_APP_FB_PROJECTID;
const FB_STORAGEBUCKET = process.env.REACT_APP_FB_STORAGEBUCKET;
const FB_MESSAGINGSENDERID = process.env.REACT_APP_FB_MESSAGINGSENDERID;

const config = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTHDOMAIN,
  databaseURL: FB_DATABASEURL,
  projectId: FB_PROJECTID,
  storageBucket: FB_STORAGEBUCKET,
  messagingSenderId: FB_MESSAGINGSENDERID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// firebase.database().ref().set({
//   name: 'Mark',
//   age: 47,
//   stressLevel: 6,
//   job: {
//     title: 'Supreme Ruler',
//     company: 'Google'
//   },
//   location: {
//     city: 'Sacramento',
//     country: 'USA'
//   }
// });

// firebase.database().ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });
// firebase.database().ref('attributes').set({
//   height: 72,
//   weight: 200,
// });

// firebase.database().ref('attributes')
//   .update({
//     height: 70,
//     IQ: 143,
//     weight: null
//   });

// firebase.database().ref().update({
//   age: 35,
//   'attributes/IQ': 143,
//   'attributes/height': 70,
//   'attributes/weight': null,
// });

// firebase.database().ref('isSingle').remove()
//   .then(() => console.log('removed succeeded'))
//   .catch(err => console.log(`Error removing: ${err}`));
