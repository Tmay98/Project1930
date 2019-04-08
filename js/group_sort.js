// displays all groups and info about them
function displayGroups(){
    // using to write group information from the database
    var ref = firebase.database().ref("groups");
    ref.on(
        "value",
        function(snap){
            console.log('working');
            // displays every group from database
            snap.forEach(function(snap){
                var groupname = snap.key;
                var location = snap.child("location").val();
                var radius = snap.child("radius").val();
                var groupinfo = snap.child("groupinfo").val();
                var group = document.createElement("div")
                group.setAttribute("class", "group");
                group.innerHTML = groupname+'<br>'+location+'<br>'+groupinfo
                group.onclick = function() {
                    localStorage.setItem("groupname",groupname);
                    localStorage.setItem("location",location);
                    localStorage.setItem("radius",radius);
                    localStorage.setItem("groupinfo",groupinfo);
                    window.location.href="group_page.html"
                };
                document.getElementById('grpinfo').appendChild(group)
            });
        
        });    
}
function removeElem(){
    document.getElementById('meetups').innerHTML='Meetups';
    document.getElementById('grpinfo').style.display='initial';   
    document.getElementById('headline').style.display='none';  // removing elemts from the page after user activity
    document.getElementById('mainbutton').style.display='none';
    document.getElementById('googleMap').style.display='none';
    document.getElementById('locationbtn').style.display='none'; 
}
function clickHandlerLocationMap(){            // onclick passing the user location to the map for display
    userLocation(49.283451, -123.115255)
    document.getElementById('googleMap').style.display="initial";

}
function userLocation(lat, lng) {  // initializes a google map with passed coordinates and shows location of groups on the map 
    var mapProp = {
        center:new google.maps.LatLng(lat, lng),
        zoom:14,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        document.getElementById('googleMap').style.display="none";
    
        var marker = new google.maps.Marker({
            position: {lat: 49.283451, lng: -123.115255} ,
            map: map,
            title: 'Your location'
            });
    
        // location marker for group 1 
        var marker = new google.maps.Marker({
            position: {lat: 49.284542, lng: -123.111646} ,
            map: map,
            title: 'Group1',
            icon: 'images/blue_MarkerG.png',
        });
        // location marker for group 2 
        var marker = new google.maps.Marker({
            position: {lat: 49.280104, lng: -123.117466} ,
            map: map,
            title: 'Group2',
            icon: 'images/green_MarkerG.png',
        });
        // location marker for group 3
        var marker = new google.maps.Marker({
            position: {lat: 49.281874, lng: -123.124402} ,
            map: map,
            title: 'Group3',
            icon: 'images/orange_MarkerG.png',
        });
}

displayGroups()
