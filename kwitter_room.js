// Your web app's Firebase configuration
const config = {
      apiKey: "AIzaSyB8hA5kpx8092eL9vQVZXiXooqzP6SUMgg",
    authDomain: "kwitter-9799f.firebaseapp.com",
    databaseURL: "https://kwitter-9799f-default-rtdb.firebaseio.com",
    projectId: "kwitter-9799f",
    storageBucket: "kwitter-9799f.appspot.com",
    messagingSenderId: "633816010347",
    appId: "1:633816010347:web:e4a299f8821d7453f4eb2e",
};
// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem

document.getElementById("user_name").innerHTML + "Welcome" + user_name + "!";

function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;

            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "kwitter.html";
}