//--- variáveis globais
var Status1 = document.getElementById("Status1");
var StatusX = document.getElementById("StatusX");
var Status2 = document.getElementById("Status2");
var botao = document.getElementById("botao");
var linhas = 0;
var num_multiplas = 1;
var selected1 = 0;
var selectedX = 0;
var selected2 = 0;
//--- função ativada sempre que se carrega em qualquer uma das caixas
function boxClicked() {
    linhas = 0;
    num_multiplas = 1;
    selected1 = 0;
    selectedX = 0;
    selected2 = 0;
    for (var i = 1; i <= 13; i++) {
        var apostasNaLinha = 1;
        var x = document.getElementById("Jogo" + i + "_1").checked;
        var y = document.getElementById("Jogo" + i + "_x").checked;
        var z = document.getElementById("Jogo" + i + "_2").checked;
        if (x) selected1++;
        if (y) selectedX++;
        if (z) selected2++;
        if (x || y || z) linhas++;
        if ((x && y) || (x && z) || (y && z)) apostasNaLinha = 2;
        if (x && y && z) apostasNaLinha = 3;
        num_multiplas *= apostasNaLinha;
    }
    Status1.innerText = selected1;
    StatusX.innerText = selectedX;
    Status2.innerText = selected2;
    var x = document.getElementById("multiplas" + num_multiplas)
    if (x != null)
            x.checked = true;
}

function setStatus() {
    if (linhas == 13 && num_multiplas >= 1 && num_multiplas <= 384) {
        return true;
    }
    else {
        var arr = document.getElementsByName("multiplas");
        for (var i = 0; i < arr.length; i++) {
            arr[i].checked = false;
        }
        var erro = document.getElementById("erro");
        var erro_text = document.getElementById("erro_descricao");
        if (linhas!=13) {
            erro.style.display="block";
            erro_text.innerHTML=("Ainda só apostou em " + linhas + " dos 13 jogos nos quais tem de realizar a sua aposta.")
        } else {
            erro.style.display="block";
            erro_text.innerHTML=("Não pode realizar apostas múltiplas em que o produto das apostas das linhas seja superior a 384. Neste momento tem uma multiplicidade de "+num_multiplas+". Acompanhe a sua multiplicidade na barra inferior.");
        }
        return false;
    }
}
