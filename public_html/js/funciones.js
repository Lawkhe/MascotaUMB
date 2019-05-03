/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "";
var Alimento = 0;
var Caricias = 0;

function init(){
    name = "";
    console.log("Hola esclavos");
}

function initDos(){
    console.log("Hola esclavos");
    name = localStorage.getItem("nombreM");
    $('#name-mascota').append(name);
    var asd = $('#name-mascota').attr('id');
    console.log(asd);
    console.log(name);
}

function start(){
    name = $('#name').val();
    localStorage.setItem("nombreM", name);
    var val = name.trim();
    if(val !== ""){
        console.log("El nombre es");
        console.log(name);
        window.location = 'mascota.html';
    }else{
        $('#modal-start').modal('show');
        console.log("No tiene nombre");
    }
}

function alimentar(){
    $('#mascota').attr('src', 'images/perro1.png');
    $('#mascota').attr('class', 'img-mascota-change');
}

function acariciar(){
    $('#mascota').attr('src', 'images/MaxFeliz.png');
    $('#mascota').attr('class', 'img-mascota-change');
}