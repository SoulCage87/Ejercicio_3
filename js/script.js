let btnconver = document.getElementById('con');
let btneli = document.getElementById('eli');

btnconver.addEventListener('click', convertidor);
btneli.addEventListener('click', eliminar);

function convertidor() {
    let valor = parseFloat(document.getElementById('valor').value);
    let conversor = parseInt(document.getElementById('conver').value);
    let resultado = document.getElementById('res');
    
  if(isNaN(valor)){
    mensaje("¡Advertencia!", "Debes ingresar una longitud para proceder!", "warning");
    return;
  }

    if (conversor == 1){
        let op = valor * 1000;
        mensaje("Conversion Exitosa!","","success");
       resultado.innerHTML = `El resultado es ${op} Metros`;
    }else if (conversor == 2){
        op = valor * 100
        mensaje("Conversion Exitosa!","","success");
        resultado.innerHTML = `El resultado es ${op} Centimetros`;
    } else if (conversor == 3){
        op = valor * 12
        mensaje("Conversion Exitosa!","","success");
        resultado.innerHTML = `El resultado es ${op} Pulgadas`;
    } else {
        op = valor * 36
        mensaje("Conversion Exitosa!","","success");
        resultado.innerHTML = `El resultado es ${op} Pulgadas`;
    }  
}

function eliminar(){
    document.getElementById('valor').value = "";
    document.getElementById('res').innerHTML = "";
}

function mensaje(title,text,icon){
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
}