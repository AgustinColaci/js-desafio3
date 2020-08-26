var dias = ['Lunes','Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

function semana(){
    for(var i=1; i<=7; i++){
            if(i ===7){
        alert("SALIO EL 7, ES DOMINGO!")
        } 
            else if (i%2 ===0) {
        console.log("El numero " + i + " es par")
        }   
            else {
        console.log("El numero " + i + " es impar")
        }
    } 
}