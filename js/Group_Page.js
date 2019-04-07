function setinfo(){
    groupname = localStorage.getItem("groupname");
    grouplocation = localStorage.getItem("location");
    radius = localStorage.getItem("radius");
    groupinfo = localStorage.getItem("groupinfo");
    user = localStorage.getItem("name")
    document.getElementById('groupTitle').innerHTML = groupname;
    document.getElementById('summary').innerHTML = 'location: ' + grouplocation + ' (' + radius + ' km)'  + '<br>' + groupinfo;
    var promise = firebase.database().ref("groups/" + groupname + '/users/' + user + '/').update({
        status: true
    });
   promise.then(function(){
       var ref = firebase.database().ref("groups/" + groupname  + "/users/");
        ref.on(
            "value",
            function(snap){
                
                snap.forEach(function(snap){
                    var name = snap.key
                    var user = document.createElement('h3')
                    user.innerHTML = name
                    document.getElementById('users').appendChild(user)
                });
            })
    })
}
    var groupname = localStorage.getItem("groupname");
    var meetupnames = []
    var ref = firebase.database().ref("groups/" + groupname  + "/meetups");
    ref.on(
        "value",
        function(snap){
            console.log("---Names of all members in " + groupname + " group");
            
            snap.forEach(function(snap){
                var meetupname = snap.key;
                var day = snap.child("day").val();
                var location = snap.child("location").val();
                var month = snap.child("month").val();
                var year = snap.child("year").val();
                var hour = snap.child("hour").val();
                var minute = snap.child("minute").val();
                var meetup = document.createElement("button")
                meetup.setAttribute("class", "meetup");
                meetup.innerHTML = meetupname +'<br>'+'location: '+location+'<br>'+'date: '+day+' '+month+' '+year+'<br>'+'Time: '+hour+':'+minute+'<br>'
                meetup.onclick = function() {
                localStorage.setItem('meetupname', meetupname);
                localStorage.setItem('meetupday', day);
                localStorage.setItem('meetuplocation', location);
                localStorage.setItem('meetupmonth', month);
                localStorage.setItem('meetupyear', year);
                localStorage.setItem('meetuphour', hour);
                localStorage.setItem('meetupminute', minute);
                window.location.href="Meetup_page.html"
                };
                document.getElementById('meetupslist').appendChild(meetup)
            });
        
        });
