function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

function borrar(){
    document.getElementById('pantalla').value = '';
}

function borrarUnidad(){
    document.getElementById('pantalla').value = document.getElementById('pantalla').value.slice(0,-1);
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}


