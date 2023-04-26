// Script de botão leia mais para os textos de serviços e sobre nós

function leiaMaisSobre(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}


function leiaMaisServices(){
    var pontos2=document.getElementById("pontos2");
    var maisTexto2=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");

    if(pontos2.style.display === "none"){
        pontos2.style.display = "inline";
        maisTexto2.style.display = "none";
        btnLeiaMais2.innerHTML = "Leia Mais";
    }else{
        pontos2.style.display = "none";
        maisTexto2.style.display = "inline";
        btnLeiaMais2.innerHTML = "Leia Menos";
    }
}