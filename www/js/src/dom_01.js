/*! dom_01.js */
// 사진첩 만들기 1

 function showPic(whichpic){

 	var source = whichpic.getAttribute('href');
 	var placeholder = document.getElementById('placeholder');
 	placeholder.setAttribute('src', source);
 	return false;

 };

