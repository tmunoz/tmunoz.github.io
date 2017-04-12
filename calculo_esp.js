$( "#Formulario" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
  var datos = $(this).serializeArray();
  var pe = parseInt(datos[0]["value"]);
  var aa = parseInt(datos[1]["value"]);
  var apv = parseInt(datos[2]["value"]);
  var sp = parseInt(datos[3]["value"]);
  var is = parseInt(datos[4]["value"]);
  var ej = parseInt(datos[5]["value"]);
  var e = parseInt(datos[6]["value"]);
  var sx = datos[7]["value"]
  var mj = monto_jub(ej, e, sp, is, apv, aa);
  var ahor = ahorro(mj, pe, ej, e, sx, apv, aa, is,sp);
  if (parseInt(ahor) == 0){
    $("#resultado").text( "No necesita ahorrar más" );
  } else {
  $("#resultado").text( parseInt(ahor) );
  }
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

function ahorro(mj, pe, ej, e, sx, apv, aa, is, sp){
  var mje;
  if (sx == "m"){
    mje = pe * (79 - ej) * 12;
  } else {
    mje = pe * (83 - ej) * 12;
  }
  if (mj >= mje){
    return 0;
  } else {
    var vf = 0;
    for(i = 1; i < ej - e; i++){
      vf = vf + 12 * math.pow(1 + is/100, ej - e - i);
    }
    return (mje-aa)/vf - sp * 0.1;
  }

}
