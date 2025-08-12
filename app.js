let arrListaAmigos=[];

function agregarAmigo(){
    let NvoAmigo = document.getElementById('amigo').value;
    console.log(NvoAmigo);
    if (!arrListaAmigos.includes(NvoAmigo)){
        arrListaAmigos.push(NvoAmigo);
    }else{   
        alert(`Ya capturaste este amigo: ${NvoAmigo}`);
    }
    console.log(arrListaAmigos);
    document.getElementById('amigo').value="";
    let msgAmigos = document.querySelector('h3');
    msgAmigos.innerHTML='Estos son tus amigos';
    let NomAmigos = document.querySelector('#dato');
    NomAmigos.innerHTML = arrListaAmigos;
    imprimirAmigos();

    
}
function imprimirAmigos(){    
    let listaUL=document.getElementById("listaAmigos");
    listaUL.innerHTML="";    
 //   var NomAmigoUL=document.createElement("p");
    for(i=0;i<arrListaAmigos.length;i++){
        var newLI = document.createElement("li");
        newLI.textContent=arrListaAmigos[i];
        listaUL.appendChild(newLI);
 //       newAmigo="";
//        newAmigo = arrListaAmigos[i];
//        NomAmigoUL.appendChild(document.createTextNode(newAmigo));
 //       document.querySelector("#listaAmigos").appendChild(newLI).appendChild(NomAmigoUL);
    }
//    document.getElementById('listaAmigos'). =NomAmigo;
//    msgAmigos.innerHTML="<h2>Amigos</h2";
}
function sortearAmigo(){
    let numeroRandom=Math.floor(Math.random()* ListaAmigos.length);
    console.log(numeroRandom); 
    alert(`el amigo secreto es: ${ListaAmigos[numeroRandom]}`);
    limpiar();
}
function limpiar(){
    let msgAmigos = document.querySelector('h3');
    msgAmigos.innerHTML='';
    let NomAmigos = document.querySelector('p');
    NomAmigos.innerHTML ='';
    ListaAmigos=[];
}