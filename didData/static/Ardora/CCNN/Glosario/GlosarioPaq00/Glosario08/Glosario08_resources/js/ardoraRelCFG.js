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
var wordsGame="R2xvc2FyaW8wOA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Hifas</p>","<p>Micelio</p>","<p>Morfología</p>","<p>Organismos</p>","<p>Microorganismos</p>","<p>Anuclear</p>","<p>Genético</p>","<p>Quitina</p>"];
var iL=["<div  align='center'><img src='Glosario08_resources/media/hifas.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/micelio01.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/Morfologia.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/microorg.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/microorganismos.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/anuclear.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/genetico.jpg'></div>","<div  align='center'><img src='Glosario08_resources/media/quitina.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Se llama procariota o procarionte a las células sin núcleo celular definido, es decir, cuyo material genético se encuentra disperso en el citoplasma, reunido en una zona denominada nucleoide. Por el contrario, las células que sí tienen un núcleo diferenciado del citoplasma, se llaman eucariotas, es decir aquellas cuyo ADN se encuentra dentro de un compartimento separado del resto de la célula.</p>","<p>conjunto de hifas. El micelio es el aparato vegetativo de la planta y, en consecuencia, es en realidad lo que hace crecer, reproducir y morir al hongo. Los micólogos consideran que la estructura del micelio se parece a la complejidad neuronal del cerebro humano y, al mismo tiempo, tiene una similitud con las redes de internet.</p>","<p>Relativo a los genes  el código genético de un ser vivo es la forma en que están dispuestos sus genes.; Relativo a la genética  el color de los ojos es una característica genética que los hijos heredan de los padres.</p>","<p>Cada uno de los filamentos que constituyen el aparato vegetativo de algunos hongos, que sirve para tomar los nutrientes del suelo. Son una red de filamentos cilíndricos que conforman la morfología del cuerpo de los hongos multicelulares. Están constituidos por una fila de células alargadas y tubulares, envueltas por una pared celular compuesta de quitina. El conjunto de hifas se denomina micelio.</p>","<p>Sustancia formada por glúcidos nitrogenados, de color blanco e insoluble en agua, que constituye el material principal del que está formado el revestimiento exterior del cuerpo de los artrópodos, así como ciertos órganos de los hongos.</p>","<p>son aquellos seres vivos más diminutos que únicamente pueden ser apreciados a través de un microscopio. En este extenso grupo podemos incluir a los virus, las bacterias, levaduras y mohos que pululan por el planeta tierra.</p>","<p>estudio de las formas que tienen diferentes cosas. Usualmente, la morfología se utiliza en dos áreas bien diferenciadas  en la biología, para estudiar el cuerpo, la forma de los diferentes organismos vivos y en la lingüística, para estudiar y analizar las palabras, los elementos que las mismas tienen, sus formas y estructuras.</p>","<p>todos los seres vivos que componen los diferentes espacios del planeta Tierra y que pueden variar enormemente en forma, características y elementos primordiales, pasando de microorganismos a gigantescos animales de mas de cien metros de largo.</p>"]; ansRL=["Mw","MQ","Ng","Nw","NQ","MA","Mg","NA"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
