import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){
    let who = ['El Perro', 'Mi Abuela', 'El Cartero', 'Mi Pajaro'];
    let action = ['comió', 'meó en', 'aplastó', 'se rompió'];
    let what = ['mi tarea', 'mi teléfono', 'el coche'];
    let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'durante mi almuerzo', 'mientras estaba rezando'];
    function generateExcuse(){
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

    return whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
    }

    this.document.querySelector("#excuse").innerHTML = generateExcuse();

};
