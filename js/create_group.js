function saveform(){
            
    var groupname = document.getElementById("groupform").elements[0].value
    var location = document.getElementById("groupform").elements[1].value
    var radius = document.getElementById("groupform").elements[2].value
    var groupinfo = document.getElementById("groupform").elements[3].value
    localStorage.setItem("groupname",groupname);
    localStorage.setItem("location",location);
    localStorage.setItem("radius",radius);
    localStorage.setItem("groupinfo",groupinfo);
    var promise = firebase.database().ref("groups/" + groupname).set({
        location: location,
        radius: radius,
        groupinfo: groupinfo
    });
    promise.then(function(){
        window.location.href = "group_page.html"
    })
}    
firebase.database().ref("groups/" + groupname).set({
        location: location,
        radius: radius,
        groupinfo: groupinfo
    });