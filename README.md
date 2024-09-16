## Funciones Principales

### `agregar(valor)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `valor` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `valor` concatenando el nuevo valor.

    function agregar(value) {
        document.getElementById('pantalla').value += valor;
    }

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `resultado`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calcular() {
        const valorPantalla = document.getElementById('pantalla').value;
        const result = eval(valorPantalla);
        document.getElementById('pantalla').value = resultado;
    }

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `borrar()`

La función `borrar()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function borrar() {
        document.getElementById('pantalla').value = '';
    }

### `borrarUnidad()`

La función `borrarUnidad()` se utiliza para borrar unidad por unidad el contenido de la 
pantalla. Lo que hace es recortar el largo de la cadena iniciando desde el final. Para 
esto se utiliza el método `slice()`.

    function borrarUnidad(){
        document.getElementById('pantalla').value = document.getElementById('pantalla').value.slice(0,-1);
    }
