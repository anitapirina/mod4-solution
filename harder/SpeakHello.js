(function (window) {
var speakHello = {};
speakHello.word = "Hello ";
speakHello.speak = function (){
	console.log(speakHello.word + names[i]);
}

window.speakHello=speakHello;

})(window);