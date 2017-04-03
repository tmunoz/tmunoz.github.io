
$( "#Formulario" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
  var datos = $(this).serializeArray();
  var aa = parseInt(datos[0]["value"]);
  var apv = parseInt(datos[1]["value"]);
  var sp = parseInt(datos[2]["value"]);
  var is = parseInt(datos[3]["value"]);
  var ej = parseInt(datos[4]["value"]);
  var e = parseInt(datos[5]["value"]);
  var sx = datos[6]["value"];
  var mj = monto_jub(ej, e, sp, is, apv, aa);
  var ps = pension(mj, ej, sx);
  $("#resultado").text( parseInt(ps) );
});

function monto_jub(ej, e, sp, is, apv, aa){
  var mj = aa;
   for(i = 1; i <= ej - e; i++){
    mj = mj + sp * 0.1 * 12 * math.pow(1 + is/100, ej - e - i);
  }
  if (apv > 0){
   for(i = 1; i <= ej - e; i++){
      mj = mj + apv * 12 * math.pow(1 + is/100, ej - e - i);
    }
  }
  return mj;
}

function pension(mj, ej, sx){
  if (sx == "m"){
    return mj/((79 - ej)*12);
  } else {
    return mj/((83 - ej )*12);
  }
}
