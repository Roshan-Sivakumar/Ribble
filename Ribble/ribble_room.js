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

var rname = localStorage.getItem("username");
document.getElementById("get_username").innerHTML = "Welcome " + rname + "!";
console.log(rname);

//For Ribble Room
function addribbleroom(){
      ribbleroomname = document.getElementById("ribbleroom").value;
      firebase.database().ref("/").child(ribbleroomname).update({purpose : "adding ribble room"});
}

function logout(){
      localStorage.removeItem("ribble_room");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function redirectToRoomName(){
      ribbleroomname = document.getElementById("ribbleroom").value;
      localStorage.setItem("ribble_room", ribbleroomname);
      window.location = "ribble_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
