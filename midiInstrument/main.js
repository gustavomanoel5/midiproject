function tocaSom(){
    //document.querySelector('.tecla_pom');
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSom;

function tocaClap(){
    //document.querySelector('.tecla_clap');
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaClap;

function tocatim(){
    //document.querySelector('.tecla_tim');
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocatim;

function tocapuff(){
    //document.querySelector('.tecla_puff');
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocapuff;

function tocaSplash(){
    //document.querySelector('.tecla_splash');
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSplash;

function tocaToim(){
    //document.querySelector('.tecla_toim');
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaToim;

function tocaPsh(){
    //document.querySelector('.tecla_psh');
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaPsh;

function tocaTic(){
    //document.querySelector('.tecla_tic');
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaTic;

function tocaTom(){
    //document.querySelector('.tecla_tom');
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaTom;

document.addEventListener("keydown", function(event){
    console.log(event.key);
     if(event.key === "7"){
       tocaSom();
     }
     if(event.key === "8"){
        tocaClap();
     }
     if(event.key === "9"){
        tocatim();
     }
     if(event.key === "4"){
        tocapuff();
     }
     if(event.key === "5"){
        tocaSplash();
     }
     if(event.key === "6"){
        tocaToim();
     }
     if(event.key === "1"){
        tocaPsh();
     }
     if(event.key === "2"){
        tocaTic();
     }

     if(event.key === "3"){
        tocaTom();
     }


});
