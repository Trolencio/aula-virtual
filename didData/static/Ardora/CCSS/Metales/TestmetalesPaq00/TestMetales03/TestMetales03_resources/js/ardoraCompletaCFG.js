//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=24; attempts=0; attemptsMax=1;
var score=0; scoreMax=24; scoreInc=1; scoreDec=1
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
var timeOnMessage=2; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="TestMetales03_resources/media/fundicion00.jpg" alt="Ima"  align="left"><p>Características de la edad de Cobre: </p><p> -El <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, junto con el oro y la plata, es de los primeros metales utilizados en la <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>. </p><p> -Invención de la <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> </p><p> -Desarrollo de la <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> : arado, regadío, estiércol y nuevos cultivos (olivo ,vid...) </p><p> -Desarrollo de la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>, domesticación del asno y el buey, la obtención de leche, lana, queso y yogurt. </p><p> -Desarrollo de la <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="TestMetales03_resources/media/EdadMetal03.jpg" alt="Ima"  align="left"><p>Edad de Bronce ( 3 000 - 1 500 a.c ) </p><p> -El bronce es resultado de la aleación de <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> (90%) + <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> (10%) aproximadamente , obteniéndose un metal mas <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>. </p><p> -Se dió la aparición del primer <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, la primera autoridad política. </p><p> -La organización social se hizo de hecho más compleja que en los poblados <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>. Desaparición de la <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> social</p>','<img class="imaLeft" src="TestMetales03_resources/media/mesop.jpg" alt="Ima"  align="left"><p>-El bronce se origina en la actual <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>, en torno al año 2800 a.C., pero también simultáneamente en la India, Irán, Sumeria y Egipto. Hacia el 2400 a.C. llega al Egeo y hacia el 1700 a.C. a <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly>. </p><p> -El cobre se introdujo en Europa central hacia el año 1800-1600 a.c. y se desarrolla hasta el 700 a.C. En este periodo se generalizan las construcciones <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>. </p><p> -El mar <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> es un área de intenso comercio del bronce.</p>','<img class="imaLeft" src="TestMetales03_resources/media/hierro03.jpg" alt="Ima"  align="left"><p>Edad de Hierro (1 500 a.c ) </p><p> -La edad de Hierro es el estadio en el desarrollo de una civilización en el que se descubre y populariza el uso del <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> como material para fabricar <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> y <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly>. </p><p> - En algunas sociedades antiguas, las tecnologías <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly> necesarias para poder trabajar el hierro aparecieron de forma <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> a otros cambios tecnológicos y culturales, incluyendo muchas veces cambios en la agricultura, las creencias religiosas y los estilos artísticos, aunque ese no ha sido siempre el caso. </p><p> -El hierro le permitió al hombre dominar mejor el <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> y ampliar su <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly>. Los <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly> fueron los primeros en usar el hierro.</p>'];
var answers=["estaño","simultánea","Egeo","agricultura","metalúrgicas","Armenia","horizonte cultural","duro y resistente","megalíticas","cobre","neolíticos","cobre","metalurgia","medio ambiente","Estado","igualdad","herramientas","Europa","hierro","Prehistoria","ganadería","hititas","minería","armas"];
var a=["OA","MjE","MTY","NA","MjA","MTM","MjM","OQ","MTU","MQ","MTE","Nw","Mw","MjI","MTA","MTI","MTk","MTQ","MTc","Mg","NQ","MjQ","Ng","MTg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="VGVzdE1ldGFsZXMwMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
