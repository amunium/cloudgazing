// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJ9QtQi2oRG82GsgJ7_KDfEGZpWW6w7g",
  authDomain: "cloudgazing.firebaseapp.com",
  databaseURL: "https://cloudgazing-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cloudgazing",
  storageBucket: "cloudgazing.appspot.com",
  messagingSenderId: "30452503596",
  appId: "1:30452503596:web:d6cc65fde6fb1de558ed89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initiates page with the latest update
function pageInit() {
    // create head menu with topics

    // create right menu with index

    // create left meny with startup menu
    alert();
}


// changes topic
function changeTopic(topicId) {
    //get snapshot of topicDatabase

    // change title to topic title

    // change text to topic text

    // change left menu
    
    // change active topbar element
    document.getElementsByClassName("active")[0].className = " ";
    document.getElementById("p" + topicId).className = "active";
}

// changes text
function changeText(topicId, contentId) {    
    // change text

    // change sources

}