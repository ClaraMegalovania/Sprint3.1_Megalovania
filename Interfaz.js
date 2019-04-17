function interfaz () {

    //CREAR Y CARGAR EL CONTEXTO
    var canvasIzquierda = document.getElementById("lienzoIzq");
    var contextoIzquierda = canvasIzquierda.getContext("2d");
    var canvasDerecha = document.getElementById("lienzoDer");
    var contextoDerecha = canvasDerecha.getContext("2d");

    //CREAR Y CARGAR LOS SPRITES
    var interfazIzquierda = new Image();
    interfazIzquierda.src = "Interfaz/InterfazIzquierda.png";
    var interfazDerecha = new Image();
    interfazDerecha.src = "Interfaz/InterfazDerecha.png";

    function dibujarInterfaz () {
        contextoIzquierda.drawImage(interfazIzquierda, 0, 0, interfazIzquierda.width, interfazIzquierda.height);
        contextoDerecha.drawImage(interfazDerecha, 0, 0, interfazIzquierda.width, interfazIzquierda.height);  
    };
    
    var frame = window.setInterval(dibujarInterfaz, 100); 
};

