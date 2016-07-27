//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime=""; messageError="Intenta Nuevamente"; messageErrorG="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R2xvc2FyaW8wNQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Comensalismo</p>","<p>Parasitismo</p>","<p>Relación Interespecifica</p>","<p>Relación Intraespecífica</p>","<p>Relación Antagónica</p>","<p>Hábitat</p>","<p>Bacilos</p>","<p>Patógeno</p>"];
var iL=["<div  align='center'><img src='Glosario05_resources/media/comensalismo.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/parasitismo.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/Depredador.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/caceriaengrupo.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/antagonismo.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/hogar.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/bacilos.jpg'></div>","<div  align='center'><img src='Glosario05_resources/media/patogenos.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>asociación consistente en que un ser vivo depende totalmente de otro ser vivo. Esta dependencia de tipo fisiológico tiene la finalidad de nutrir al parásito. En el parasitismo, el parásito no puede sobrevivir en ausencia de su hospedador. A modo de ejemplo de parasitismo podemos recordar a las amebas que viven en el sistema digestivo de algunos animales o los piojos que viven en el cuero cabelludo</p>","<p>es un mecanismo de interacción biológica en la que un ser vivo consigue un beneficio pero otro ser vivo no obtiene ningún beneficio pero tampoco se ve perjudicado. En otras palabras, uno gana pero el otro ni gana ni pierde. Un buen ejemplo  es el que sucede entre algunos animales carroñeros y las presas de otros animales.</p>","<p>es la interacción biológica en la que los organismos que intervienen provienen de diferentes especies.</p>","<p>es la interacción biológica en la que los organismos que intervienen pertenecen a la misma especie.</p>","<p>Son las relaciones que se da entre dos individuos en donde por lo menos uno sale perjudicado.</p>","<p>es aquel ambiente o espacio que se encuentra ocupado por una determinada población biológica, la cual, reside, se reproduce y perpetúa su existencia allí porque el mismo le ofrece todas las condiciones necesarias para hacerlo, es decir, se siente cómoda en el porque cumple con todas sus expectativas.</p>","<p>bacterias de cuerpo alargado en forma de bastón y que pueden encontrarse en distintos ambientes.</p>","<p>es un adjetivo que califica a lo que provoca una enfermedad (una variación del estado de salud).</p>"]; ansRL=["MQ","MA","Mg","Mw","NA","NQ","Ng","Nw"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
