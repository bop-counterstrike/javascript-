"use strict"
let hello = document.getElementById('knopka')
let hod = document.getElementById('header')
let sctn = document.getElementById('section')
function alik () {
    document.body.classList.toggle("theme");
}
/*function bob(){
    alert(sctn)
}*/
function fond () {
    hod.classList.toggle ("headerlight");
}
function font () {
    sctn.classList.toggle ("section-light");
}
function button () {
    hello.classList.toggle ("darkbutton");
}
hello.onclick = function (){
    alik();
//    bob();
    fond();
    font();
    button();
}

