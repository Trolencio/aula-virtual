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
var wordsGame="R2xvc2FyaW8xMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Ciclo Lítico</p>","<p>Competencia Interespecífica</p>","<p>Depredador</p>","<p>germen</p>","<p>Germen Patógeno</p>","<p>Evolución Biológica</p>","<p>Reproducción</p>","<p>Reproducción asexual</p>"];
var iL=["<div  align='center'><img src='Glosario12_resources/media/CICLOBACTERIOFAGO.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/competenciaintraespecificab.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/Depredador.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/germen.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/Germenpatogeno.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/Evolucionbio.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/Reproduccion00.jpg'></div>","<div  align='center'><img src='Glosario12_resources/media/repasex.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>proceso biológico a través del cual una especie podrá crear nuevos organismos pertenecientes por supuesto a la misma. La reproducción es la característica común que observan casi todas las formas de vida que se conocen hasta el momento  los animales, los seres humanos, las plantas, entre otros, siendo la misma plausible a través de dos formas  sexual y asexual</p>","<p>también denominado microorganismo o microbio, es un ser vivo que únicamente se podrá visualizar a través de un microscopio. Se trata de un organismo que dispone de individualidad y una organización biológica de lo más elemental. Su principal acción es la de causar o propagar enfermedades. La limpieza es una condición indiscutible si se quiere mantener la habitación libre de gérmenes</p>","<p>El germen puede ser patógeno o no serlo, de serlo, se los podrá dividir en las siguientes categorías  virus (causan infecciones y solo se reproducirán en células huésped), bacteria (organismo unicelular, una de las formas de vida más abundante que existe en la tierra, microscòpicas), protozoo (de metabolismo complejo, presentes en forma de quistes o huevos) y larvas (en fase juvenil de animales)</p>","<p>ciclo reproductivo de un virus .</p>","<p>es el adjetivo que hace referencia a quien depreda. El verbo depredar, por su parte, está vinculado a robar y saquear con violencia o, en el caso de los animales, a la acción de cazar ejemplares de otra especie para la subsistencia. Emana del latín, más exactamente de la palabra “depraedator”, que puede traducirse como “saqueador”</p>","<p>es aquel proceso continuo de transformación de las especies a través de los cambios que se produjeron en las sucesivas generaciones y que se verá reflejado y plasmado en el cambio de las frecuencias alélicas de una población.</p>","<p>dos entidades se relacionan con los recursos de un medio determinado intentando acapararlos por completo y perjudicando una a la otra; en otras palabras, una relación de competencia entre dos criaturas implica que cada una se beneficia perjudicando a la otra</p>","<p>tipo de reproducción en la cual un solo organismo puede dar origen a otros organismos nuevos. Es decir, del organismo en cuestión se suelta una sola célula, o en su defecto partes del cuerpo desarrollado, y entonces, por procesos de tipo mitóticos se conformará otro organismo completo y genéticamente igual al original.</p>"]; ansRL=["Mw","Ng","NA","MQ","Mg","NQ","MA","Nw"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
