// displays all meetupinfo on meetup_page
var meetupname = localStorage.getItem('meetupname')
var meetupday = localStorage.getItem('meetupday');
var meetuplocation = localStorage.getItem('meetuplocation');
var meetupmonth = localStorage.getItem('meetupmonth');
var meetupyear = localStorage.getItem('meetupyear');
var meetuphour = localStorage.getItem('meetuphour');
var meetupminute = localStorage.getItem('meetupminute');
document.getElementById('meetupname').innerHTML = '<h3>'+meetupname+'</h3>'
document.getElementById('meetupinfo').innerHTML ='<h4>'+ 'Location: '+meetuplocation+'<br> Date: '+meetupday+'/'+meetupmonth+'/'+meetupyear+'<br> Time: '+meetuphour+':'+meetupminute + "</h4>"