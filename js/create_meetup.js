groupname = localStorage.getItem("groupname");
        meetupname = ''
        day = ''
        month = ''
        year = ''
        hour = ''
        minute = ''
        
        // saves form with all meetup info to database and goes to group_page.html
        function saveform(){
            var meetupname = document.getElementById("meetupform").elements[0].value
            var month = document.getElementById("meetupform").elements[1].value
            var day = document.getElementById("meetupform").elements[2].value
            var year = document.getElementById("meetupform").elements[3].value
            var hour = document.getElementById("meetupform").elements[4].value
            var minute = document.getElementById("meetupform").elements[5].value
            var location = document.getElementById("meetupform").elements[6].value
            var promise = firebase.database().ref("groups/" + groupname + '/meetups/' + meetupname).update({
                location: location,
                day: day,
                month: month,
                year: year,
                hour: hour,
                minute:  minute,
            });

            promise.then(function(){
                window.location.href = "group_page.html"
            })
        }

        firebase.database().ref("groups/" + groupname + '/meetups/' + meetupname).set({
            location: location,
            day: day,
            month: month,
            year: year,
            hour: hour,
            minute: minute,
        })
        