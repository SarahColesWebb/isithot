document.addEventListener('DOMContentLoaded', () => {

//create a new XMLHTTPRequest object
var request = new XMLHttpRequest();

//call DarkSky API for Seattle lat/lon
request.open('GET', 'https://api.darksky.net/forecast/5c3c232f1876b0c266b3515158ddc7f5/19.54289,155.6659', true);

request.onload = () => {

//gather data from API call
var data = JSON.parse(request.responseText);
var contents = data['currently']['temperature'];

//edit id temp span to include data responseText
document.querySelector('#temp').innerHTML = contents;
};

//send XMLHttpRequest
request.send();
});
