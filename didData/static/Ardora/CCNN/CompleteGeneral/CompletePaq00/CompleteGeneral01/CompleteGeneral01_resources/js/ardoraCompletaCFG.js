//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=22; attempts=0; attemptsMax=1;
var score=0; scoreMax=22; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var timeOnMessage=2; messageOk="Actividad Finalizada!!"; messageTime=""; messageError="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral01_resources/media/bacteriaanimada02.jpg" alt="Ima"  align="left"><p>Un organismo <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> está formado por una única célula. Ejemplos de organismos unicelulares son las <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> o los <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. </p><p> El reino mónera está conformado por organismos <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> de una <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> (unicelulares). La palabra procarionte designa todos los organismos cuyo ácido desoxirribonucleico (ADN) se encuentra extendido en el <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> celular.</p>','<img class="imaLeft" src="CompleteGeneral01_resources/media/bacteriapeligrosa01.jpg" alt="Ima"  align="left"><p>Los organismos del reino <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> tienen células sin <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>, sin mitocondrias, sin membrana nuclear y con una pared celular rígida que rodea la membrana plasmática. </p><p> Su forma de <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> es muy diversa, aunque lo hacen de dos modos básicos: o son heterótrofos o son autótrofos. </p><p>  </p><p> Los procariontes <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> sintetizan sus alimentos a partir de sustancias inorgánicas. Los procariontes <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> son saprofitos si las sustancias se encuentran en descomposición, pero si viven sobre o dentro de otros organismos vivos son <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral01_resources/media/moneras01.jpg" alt="Ima"  align="left"><p>La mayor parte de los organismos <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> se reproduce de forma <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly>, multiplicándose por escisión o <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>.  Como tienen la facultad de hacer esto durante un corto período de tiempo, una <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> puede producir hasta un millón de sucesores al cabo de unas pocas <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly>. </p><p>  </p><p> Móneras. Se encuentran en todo tipo de <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> acuáticos y terrestres. Incluso algunos hacen del cuerpo humano su hogar.</p>','<img class="imaLeft" src="CompleteGeneral01_resources/media/bacteriaClasif00.jpg" alt="Ima"  align="left"><p>Clasificación de las Bacterias:  </p><p> De acuerdo con su <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly>, reciben nombres distintos. Si parecen bastones son <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>, si son redondas son <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly>, si semejan tirabuzones son <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> y si parecen una coma son llamadas vibrios.</p>'];
var answers=["unicelular","mónera","asexual","núcleo","nutrición","horas","cocos","bipartición","autótrofos","hábitats","bacterias","bacilos","espirilos","bacteria","procariontes","procariontes","forma","protozoos","célula","citoplasma","heterótrofos","parásitos"];
var a=["MQ","Nw","MTQ","OA","OQ","MTc","MjE","MTU","MTA","MTg","Mg","MjA","MjI","MTY","MTM","NA","MTk","Mw","NQ","Ng","MTE","MTI"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
