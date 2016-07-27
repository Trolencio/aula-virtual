//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=22; attempts=0; attemptsMax=1;
var score=0; scoreMax=22; scoreInc=1; scoreDec=1
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
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Fin"; messageTime=""; messageError="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="Egipto05_resources/media/piramides.jpg" alt="Ima"  align="left"><p>La ARQUITECTURA del Antiguo Egipto era <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> y se caracteriza por el empleo de la piedra de silleria <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> en grandes <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, con sistema constructivo <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> y sólidas <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>, todos estos <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> eran hechos por los <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> cumpliendo con un tributo hacia el <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>. </p><p> Las construcciones más <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> de la arquitectura egipcia <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> son los «complejos de las pirámides», los templos y las tumbas (mastabas, speos e hipogeos)</p>','<img class="imaLeft" src="Egipto05_resources/media/math.jpg" alt="Ima"  align="left"><p>Las MATEMATICAS en el Antiguo Egipto constituyeron la rama de la ciencia que más se <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>, y podemos estudiarlas a partir del <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly>, que enuncia: Reglas para estudiar la naturaleza y para comprender todo lo que existe, todo <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>, todo secreto. </p><p> La introducción de un <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly>, basado en la división del año en doce meses de treinta días y el agregado de cinco días festivos, el <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly> de edificios <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> perfectamente realizados, como las <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly>, sugieren, conjuntamente a una técnica <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> y una buena BASE <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Egipto05_resources/media/mapaantiguo.jpg" alt="Ima"  align="left"><p>GEOGRAFIA PRIMITIVA </p><p>  </p><p> Se han hallado mapas en Egipto de <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly> (plano de jardín del siglo <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly>) y <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> (cerca del año 350 a. C.).</p>'];
var answers=["monumental","desarrolló","campesinos","Faraón","monumentales","XV a. C.","papiro Rhind","bloques","originales","matemática","adintelado","columnas","misterio","pirámides","monumentos","calendario","gran escala","erigimiento","avanzada","cosmológicos","monumental","tallada"];
var a=["MTA","MTE","Nw","OA","MTY","MjE","MTI","Mw","OQ","MTk","NA","NQ","MTM","MTc","Ng","MTQ","MjA","MTU","MTg","MjI","MQ","Mg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="RWdpcHRvMDU"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
