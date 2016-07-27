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
var wordsGame="R2xvc2FyaW8xMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Semillas Transgénicas</p>","<p>Especie</p>","<p>Infección Viral</p>","<p>Biodiversidad</p>","<p>Peligro de Extinción</p>","<p>Metabolismo</p>","<p>Evolución</p>","<p>Lisis</p>"];
var iL=["<div  align='center'><img src='Glosario11_resources/media/transgenica.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/Especie.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/infeccionviral.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/Biodiversidad.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/peigroex.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/Metabolismo.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/Evolucion01.jpg'></div>","<div  align='center'><img src='Glosario11_resources/media/Lisis.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>aquellas semillas a las que se han incorporado nuevos genes para modificar su estructura interna. Este proceso forma parte de una disciplina, la biotecnología, que en la actualidad representa una revolución en el sector alimenticio.</p>","<p>la pluralidad de especies de seres vivos que habitan en un ambiente. En su sentido más amplio, el concepto alude a la variedad de especies existente en el planeta Tierra.</p>","<p>desarrollo gradual, avance o crecimiento que experimentan las cosas, las personas o bien los organismos vivos.</p>","<p>proceso de ruptura de la membrana celular que produce la salida del material intracelular</p>","<p>es un conjunto formado por cosas semejantes que tienen uno o más caracteres en común. La palabra proviene del latín species y se utiliza en diversos contextos.</p>","<p>toda enfermedad que se desarrolla por la intervención de un virus.</p>","<p>refiere a la probabilidad de que una especie animal o vegetal desaparezca  a mayor peligro, mayor probabilidad de extinción. La existencia de una especie en peligro de extinción, por lo tanto, se encuentra comprometida</p>","<p>es el conjunto de procesos físicos y químicos y de reacciones a las que está sujeta una célula; éstos son los que les permitirán a las mismas sus principales actividades, como ser la reproducción, el crecimiento, el mantenimiento de sus estructuras y la respuesta a los estímulos que reciben.</p>"]; ansRL=["MA","NA","NQ","MQ","Ng","Nw","Mg","Mw"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
