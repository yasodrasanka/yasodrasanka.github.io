var myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
//     //alert(String(myImage.getAttribute('src'));
// }

function test(){
	var myImage = document.querySelector('img');
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/chrome.png') {
      myImage.setAttribute ('src','images/firefox.png');
    } else {
      myImage.setAttribute ('src','images/chrome.png');
    }
	//alert('image clicked');
	

}

// myButton.onclick = function() {
//   setUserName();
// }

// myImage.onclick = function() {
// 	alert('click on image');
//     // var mySrc = myImage.getAttribute('src');
//     // if(mySrc === 'images/chrome.png') {
//     //   myImage.setAttribute ('src','images/firefox.png');
//     // } else {
//     //   myImage.setAttribute ('src','images/chrome.png');
//     // }
// }


// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }