function login(){
    username = document.getElementById("username").value;
    if(username == ""){
        document.getElementById("invalid").innerHTML = "Please Write Your Username";
    } else {
        localStorage.setItem("username", username);
        window.location = "ribble_room.html";
    }
}