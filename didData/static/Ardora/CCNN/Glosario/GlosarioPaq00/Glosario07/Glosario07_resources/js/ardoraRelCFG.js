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
var wordsGame="R2xvc2FyaW8wNw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Flagelados</p>","<p>Ciliados</p>","<p>Esporozoarios</p>","<p>Rizópodos o Sarcodinos</p>","<p>Pandemia</p>","<p>Profilaxis</p>","<p>Levaduras</p>","<p>Quitina</p>"];
var iL=["<div  align='center'><img src='Glosario07_resources/media/flagelado.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/Ciliados.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/Esporozoarios.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/Riz__podos.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/pandemia.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/Profilaxis.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/Levaduras.jpg'></div>","<div  align='center'><img src='Glosario07_resources/media/quitina.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Los protozoos ciliados, por su parte, están recubiertos de cilios.</p>","<p>Los protozoos esporozoos se caracterizan por ser parásitos y contar con una movilidad muy reducida.</p>","<p>emana de “prophylaxis”, que puede traducirse como “prevención” y que se encuentra compuesta de tres partes diferenciadas  -El prefijo “pro-”, que significa “antes”. -La palabra “phylax”, que es equivalente a “guardián”.  Toda acción que se lleva a cabo o se utiliza para prevenir la aparición de una enfermedad o el surgimiento de una infección.</p>","<p>Nombre común por el que se conoce a distintas especies de hongos unicelulares que provocan la fermentación alcohólica de los hidratos de carbono, por lo que se utilizan en la elaboración del pan y de la cerveza.</p>","<p>Sustancia formada por glúcidos nitrogenados, de color blanco e insoluble en agua, que constituye el material principal del que está formado el revestimiento exterior del cuerpo de los artrópodos, así como ciertos órganos de los hongos.</p>","<p>Los protozoos flagelados son aquellos que disponen de los mencionados flagelos.</p>","<p>Los protozoos rizópodos, por último, se movilizan a través de unos apéndices que se denominan seudópodos</p>","<p>proviene de un vocablo griego que significa “reunión del pueblo” y cuya significación ha sido extendida como “enfermedad de todo el pueblo”. Se trata de una enfermedad epidémica que afecta a diversos países y que ataca a casi todas las personas de una región geográfica.</p>"]; ansRL=["NQ","MA","MQ","Ng","Nw","Mg","Mw","NA"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
