/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "";
var EstadoAnimo = 0;
var EstadoFisico = 0;
var Alimento = 3;
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
    setInterval(function(){
        console.log("Intervalo");
        EstadoMascota();
    },10000);
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

function EstadoMascota(){
    if(Alimento == 0){
        $('#mascota').attr('src', 'images/Muerto.jpg');
        setTimeout(function(){
            $('#modal-reset').modal('show');
        },4000);
    }
    Alimento = Alimento - 1; 
}

function alimentar(){
    if(Alimento > 4){
        console.log("No lo puedes alinmentar más");
        Alimento = Alimento + 1;
        $('#mascota').attr('src', 'images/perro1.png');
        $('#mascota').attr('class', 'img-mascota-change');
    }
}

function acariciar(){
    $('#mascota').attr('src', 'images/MaxFeliz.png');
    $('#mascota').attr('class', 'img-mascota-change');
}

function bañar(){
    $('#mascota').attr('src', 'images/PerrroBañando.jpg');
    $('#mascota').attr('class', 'img-mascota-change');
    setTimeout(function(){
        $('#mascota').attr('src', 'images/Bañera.jpg');
        EstadoMascota();
    },3000);
}

function pasear(){
    $('#mascota').attr('src', 'images/BoltPasear.png');
    $('#mascota').attr('class', 'img-mascota-change');
}