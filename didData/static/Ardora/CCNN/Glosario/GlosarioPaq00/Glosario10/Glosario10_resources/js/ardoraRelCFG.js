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
var wordsGame="R2xvc2FyaW8xMA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Psoriasis</p>","<p>Penicilina</p>","<p>Antibiótico</p>","<p>Enzima</p>","<p>Molécula</p>","<p>Biotecnología</p>","<p>Biomecánica</p>","<p>Abono</p>"];
var iL=["<div  align='center'><img src='Glosario10_resources/media/Psoriasis.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Penicilina.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Antibiotico01.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Enzima01.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Molecula.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Biotecnologia.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/biomecanica.jpg'></div>","<div  align='center'><img src='Glosario10_resources/media/Abono.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>es la disciplina orientada a la aplicación de las leyes que forman parte de la órbita de la mecánica a la composición y el desplazamiento de los organismos vivos.</p>","<p>Es una sustancia que puede ser inorgánica u orgánica y que se utiliza para incrementar la calidad del suelo y brindar nutrientes a los cultivos y las plantaciones. El estiércol y el guano, por ejemplo, son abonos naturales. Los abonos inorgánicos, también llamados abonos minerales</p>","<p>es un medicamento del tipo antibiótico, desde su descubrimiento en 1928 ha ido evolucionando para dar origen a un gran número de derivados sintéticos ampliamente empleados en la actualidad. La penicilina inició la era de los antibióticos</p>","<p>es aquella sustancia química, generalmente utilizada en la medicina animal y humana y en la horticultura, que puede haber sido producida directamente de un ser vivo o derivada sintéticamente de este con el objetivo de matar o impedir el crecimiento de ciertos microorganismos sensibles que hayan causado una concreta infección sobre los mencionados organismos.</p>","<p>es una molécula que se encuentra conformada principalmente por proteína que producen las células vivas, siendo su función destacada la de actuar como catalizador y regulador en los procesos químicos del organismo, es decir, cataliza las reacciones bioquímicas del metabolismo.</p>","<p>Conjunto de átomos que conforman una pequeña parte de una sustancia</p>","<p>es una enfermedad crónica que origina lesiones en la piel en forma de placas con tendencia descamarse. Es una enfermedad hereditaria, aproximadamente un 50% de las personas con psoriasis tienen un familiar que también padece este trastorno. No es una enfermedad contagiosa.</p>","<p>uso de células vivas para la producción y la optimización de medicamentos, alimentos y otros productos de utilidad para el ser humano. La noción también refiere al estudio de esta técnica y a sus aplicaciones.</p>"]; ansRL=["Ng","Mg","Mw","NA","NQ","Nw","MA","MQ"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
