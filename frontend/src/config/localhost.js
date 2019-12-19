const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};;

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080/api`;

export default {
  firebaseConfig,
  backendUrl,
};
