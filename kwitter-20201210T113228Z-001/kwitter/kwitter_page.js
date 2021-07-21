
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJGlbLFKyWwHugBigdlVhRPi7QGHI42wE",
    authDomain: "covid-naw9.firebaseapp.com",
    databaseURL: "https://covid-naw9-default-rtdb.firebaseio.com",
    projectId: "covid-naw9",
    storageBucket: "covid-naw9.appspot.com",
    messagingSenderId: "154578867060",
    appId: "1:154578867060:web:d32f1facdda147eef6d221"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var roomName = localStorage.getItem("room_name");
    var NameUser  =localStorage.getItem("Username");
   
function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}


function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


