/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "";
var EstadoAnimo = 0;
var EstadoFisico = 0;
var Alimento = 3;
var Bañar = 3;
var Pasear = 3;
var Caricias = 3;
var Point = 1;

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
    console.log("Alimento: " + Alimento + " Baños: " + Bañar +" Caricias: " + Caricias + " Paseos: " + Pasear);
    if(Alimento == 0){
        $('#mascota').attr('src', 'images/Muerto.jpg');
        setTimeout(function(){
            $('#modal-reset').modal('show');
        },4000);
    }
    Alimento = Alimento - Point; 
    Caricias = Caricias - Point;
    Bañar = Bañar - Point;
    Pasear = Pasear + Point; 
}

function alimentar(){
    if(Alimento > 4){
        console.log("No lo puedes alinmentar más");
    }else{
        Alimento = Alimento + Point;
        $('#mascota').attr('src', 'images/perro1.png');
        $('#mascota').attr('class', 'img-mascota-change');
    }
}

function acariciar(){
    Caricias = Caricias + Point;
    $('#mascota').attr('src', 'images/MaxFeliz.png');
    $('#mascota').attr('class', 'img-mascota-change');
}

function bañar(){
    Bañar = Bañar + Point;
    $('#mascota').attr('src', 'images/PerrroBañando.jpg');
    $('#mascota').attr('class', 'img-mascota-change');
    setTimeout(function(){
        $('#mascota').attr('src', 'images/Bañera.jpg');
        EstadoMascota();
    },3000);
}

function pasear(){
    Pasear = Pasear + Point; 
    $('#mascota').attr('src', 'images/BoltPasear.png');
    $('#mascota').attr('class', 'img-mascota-change');
}

function inicio(){
    window.location = 'index.html';
}