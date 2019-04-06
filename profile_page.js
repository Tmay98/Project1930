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
                        firebase.database().ref().child("users/" + uid + "/date_of_birth").on("value", function (snap) { document.getElementById('date_of_birth').value = snap.val() })
                        firebase.database().ref().child("users/" + uid + "/restrictions").on("value", function (snap) { document.getElementById('restrictions').value = snap.val() })
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


function saveform() {
    var database = firebase.database();
    var form = document.getElementById("form");
    var name = form.elements[0].value;
    var address = form.elements[1].value;
    var date_of_birth = form.elements[2].value;
    var restrictions = form.elements[3].value;
    firebase.database().ref("users/" + uid).set({
        name: displayName,
        address: address,
        date_of_birth: date_of_birth,
        restrictions: restrictions
    });
    document.getElementById("saved").innerHTML = "Your profile changes have been saved!"
    localStorage.setItem("name", name)
}