import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 120000,
//   createdAt: 0
// });

// database.ref("expenses").push({
//   description: "Chai Tea Latte",
//   note: "",
//   amount: 32500,
//   createdAt: -1
// });

// database.ref("expenses").push({
//   description: "Gas",
//   note: "",
//   amount: 2536,
//   createdAt: 1
// });

// database.ref("notes/-LPwRAQHQxBr4_bS_yMc").update({
//   body: "Buy food"
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// const firebaseNotes = {
//   notes: {
//     sjfkasjfk: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     wotnklwb: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// const onValueChange = database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// database.ref().off(onValueChange);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Jamena McInteer",
//     age: 27,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Presbyterian"
//     },
//     isSingle: false,
//     location: {
//       city: "Albuquerque",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed", e);
//   });

// database.ref().update({
//   name: "Eric",
//   age: 31,
//   job: "Technical Recruiter",
//   isSingle: null,
//   "location/city": "Austin"
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded");
//   })
//   .catch(e => {
//     console.log("error removing", e);
//   });
