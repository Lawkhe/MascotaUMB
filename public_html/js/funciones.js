/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var name = "";

var EstadoAnimo = 1;
var EstadoFisico = 2;
var Point = 1;

function init(){
    name = "";
}

function initDos(){
    name = localStorage.getItem("nombreM");
    $('#name-mascota').append(name);
    var asd = $('#name-mascota').attr('id');
    console.log(asd);
    console.log(name);
    setInterval(function(){
        console.log("Intervalo");
        tiempo();
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

function tiempo(){  
    EstadoFisico = EstadoFisico - Point; 
    EstadoAnimo = EstadoAnimo - Point;
    EstadoMascota();
}

function EstadoMascota(){
    $('#mascota').removeClass('img-mascota');
    $('#mascota').addClass('img-change');
    setTimeout(function(){
        $('#mascota').removeClass('img-change');
        $('#mascota').addClass('img-mascota');
    },1000);   
    console.log("EstadoFisico: " + EstadoFisico + " EstadoAnimo: " + EstadoAnimo);
    if(EstadoFisico <= 0){
        $('#mascota').attr('src', 'images/Muerto.jpg');
        setTimeout(function(){
            $('#modal-reset').modal('show');
        },4000);
    }else{
        if(EstadoFisico <= 1 && EstadoAnimo <= 1){
            $('#mascota').attr('src', 'images/Mascota/Flaco1.png');
        } else if(EstadoFisico <= 1 && EstadoAnimo == 2){
            $('#mascota').attr('src', 'images/Mascota/Flaco2.png');
        } else if(EstadoFisico <= 1 && EstadoAnimo >= 3){
            $('#mascota').attr('src', 'images/Mascota/Flaco3.png');
        }  else if(EstadoFisico == 2 && EstadoAnimo <= 1){
            $('#mascota').attr('src', 'images/Mascota/Normal1.png');
        }  else if(EstadoFisico == 2 && EstadoAnimo == 2){
            $('#mascota').attr('src', 'images/Mascota/Normal2.png');
        }  else if(EstadoFisico == 2 && EstadoAnimo >= 3){
            $('#mascota').attr('src', 'images/Mascota/Normal3.png');
        }  else if(EstadoFisico >= 3 && EstadoAnimo <= 1){
            $('#mascota').attr('src', 'images/Mascota/Gordo1.png');
        }  else if(EstadoFisico >= 3 && EstadoAnimo == 2){
            $('#mascota').attr('src', 'images/Mascota/Gordo2.png');
        }  else if(EstadoFisico >= 3 && EstadoAnimo >= 3){
            $('#mascota').attr('src', 'images/Mascota/Gordo3.png');
        }
    }
}

function alimentar(){
    $('.accion').prop('disabled',true);
    setTimeout(function(){
        $('.accion').prop('disabled',false);
    },2500);
    $('#efecto').attr('src', 'images/croquetas.png');
    $('#efecto').removeClass('hidden');
    setTimeout(function(){
        if(EstadoFisico > 3){
            console.log("No lo puedes alinmentar más");
        }else{
            EstadoFisico = EstadoFisico + Point; 
        }
        EstadoMascota();
        setTimeout(function(){
            $('#efecto').addClass('hidden');
        },2000);
    },2000);
}

function animo(){
    if(EstadoAnimo < 5){
        EstadoAnimo = EstadoAnimo + Point;
    }
    EstadoMascota();
}

function acariciar(){
    Block();
    $('#efecto').attr('src', 'images/manitos.png');
    $('#efecto').removeClass('hidden');
    setTimeout(function(){
        animo();
        setTimeout(function(){
            $('#efecto').addClass('hidden');
        },2000);
    },2000);
}

function bañar(){
    Block();
    $('#efecto').attr('src', 'images/burbujas.png');
    $('#efecto').removeClass('hidden');
    setTimeout(function(){
        animo();
        setTimeout(function(){
            $('#efecto').addClass('hidden');
        },2000);
    },2000);
}

function pasear(){
    Block();
    $('#efecto-correr').removeClass('hidden');
    setTimeout(function(){
        animo();
        setTimeout(function(){
            $('#efecto-correr').addClass('hidden');
        },2000);
    },2000);
}

function Block(){
    $('.accion').prop('disabled',true);
    setTimeout(function(){
        $('.accion').prop('disabled',false);
    },2000);
}

function inicio(){
    window.location = 'index.html';
}