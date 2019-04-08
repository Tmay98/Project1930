// takes all database profile data to display on profile page
var uid = null
        var displayName = null
        initApp = function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    displayName = user.displayName;
                    uid = user.uid;
                    user.getIdToken().then(function (accessToken) {
                        document.getElementById('name').value = displayName;
                        firebase.database().ref().child("users/" + uid + "/address").on("value", function (snap) { document.getElementById('address').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/month").on("value", function (snap) { document.getElementById('month').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/day").on("value", function (snap) { document.getElementById('day').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/year").on("value", function (snap) { document.getElementById('year').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/restrictions").on("value", function (snap) { document.getElementById('restrictions').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/biography").on("value", function (snap) { document.getElementById('biography').value = snap.val() })
                    });

                } else {

                }
            }, function (error) {
                console.log(error);
            });
        };

        window.addEventListener('load', function () {
            initApp()
        });

// saves form inputs to database
function saveform() {
    var database = firebase.database();
    var form = document.getElementById("form");
    var name = form.elements[0].value;
    var address = form.elements[1].value;
    var month = form.elements[2].value;
    var day = form.elements[3].value;
    var year = form.elements[4].value;
    var restrictions = form.elements[5].value;
    var biography = form.elements[6].value;
    firebase.database().ref("users/" + uid).set({
        name: displayName,
        address: address,
        month: month,
        day: day,
        year: year,
        restrictions: restrictions,
        biography: biography
    });
    document.getElementById("saved").innerHTML = "Your profile changes have been saved!"
    localStorage.setItem("name", name)
}