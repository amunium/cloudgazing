// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCYJ9QtQi2oRG82GsgJ7_KDfEGZpWW6w7g",
    authDomain: "cloudgazing.firebaseapp.com",
    databaseURL: "https://cloudgazing-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cloudgazing",
    storageBucket: "cloudgazing.appspot.com",
    messagingSenderId: "30452503596",
    appId: "1:30452503596:web:d6cc65fde6fb1de558ed89"
  };

// initialize firebase app
const app = firebase.initializeApp(firebaseConfig);

// give feedback
console.log(app.name); 
alert(app.name);

// initiate database with root reference
database = firebase.database();
const rootRef = database.ref(); 

// shortcut to DOM elements
var topicTitle = document.getElementById("topicTitle");
var text = document.getElementById("text");
var sources = document.getElementById("sources");
var infoL = document.getElementsByName("infoL");
var infoR = document.getElementById("infoR");
var topBar = document.getElementById("topBar");

// initiates page with the latest update
function pageInit() {
    alert("message");
    // create head menu with topics
    let topBarArray = [];
    rootRef.getChildren().forEach(topic => {
        topBarArray.append(topic.child(topicName).val);
    });
    alert(database);

    let topBarHTML = "";
    let ctr = 0;
    topBarArray.array.forEach(topicName => {
        if (ctr === 0) {
            topBarHTML += '<h2 id="p0" onclick="changeTopic(0)" class="active">(logo)CloudGazing</h2> '
        } else {
            topBarHTML += '<h2 id="p' + ctr + '" onclick="changeTopic(' + ctr + ')">' + topicName + '</h2> '
        }
        ctr += 1;
    });
    alert(topBarHTML);
    topBar.innerHTML = topBarHTML;
    console.log("topBar sucsessfully created");
    
    // create right menu with index
    console.log("infoR sucsessfully created");
    // create left meny with startup menu
    console.log("infoL sucsessfully created");
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

export {pageInit, changeTopic, changeText};