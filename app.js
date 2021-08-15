function playSound(){
    var audio = new Audio("wow.mp3");
    audio.play();
}
function playPerfect(){
    var audio = new Audio("perfect.mp3");
    audio.play();
}

var myNodelist = document.getElementById("li");
var i;
for(i=0; i<myNodelist.clientHeight; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var a;
for(a=0;a<close.length; a++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (b = 0; b < close.length; b++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }