// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC6_WITIdagzUo2CUuPB_hP1O9Qplb_QhQ",
      authDomain: "ribble-d4196.firebaseapp.com",
      databaseURL: "https://ribble-d4196-default-rtdb.firebaseio.com",
      projectId: "ribble-d4196",
      storageBucket: "ribble-d4196.appspot.com",
      messagingSenderId: "1016165648158",
      appId: "1:1016165648158:web:064823b14b9570ac026b0f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function logout(){
      localStorage.removeItem("ribble_room");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function sendmessage(){
      username = localStorage.getItem("username");
      message = document.getElementById("MessageInput").value;
      ribbleroomname = localStorage.getItem("ribble_room");
      firebase.database().ref(ribbleroomname).push({username : username, message : message, like : "0"});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
