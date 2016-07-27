//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=25; attempts=0; attemptsMax=1;
var score=0; scoreMax=25; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral07_resources/media/fungi01.jpg" alt="Ima"  align="left"><p>Fungi es un término latino que puede traducirse como <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> </p><p> El Reino Fungi lo conforman aquellos seres vivos de tipo <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>, como las setas, las levaduras y los mohos. En su mayoría <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> como los champiñones y el moho del pan, algunos unicelulares, como las <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. </p><p>  Los hongos se encuentran en todos los <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> terrestres y acuáticos</p>','<img class="imaLeft" src="CompleteGeneral07_resources/media/quitina00.jpg" alt="Ima"  align="left"><p>Hoy se entiende que los miembros del reino fungi son organismos eucariontes y <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>. A diferencia de las <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, sus paredes celulares se encuentran formadas por <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> </p><p> La <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> son una red de <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> cilíndricos que conforman la morfología del cuerpo de los hongos <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>. Están constituidos por una fila de células alargadas y tubulares, envueltas por una <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> compuesta de quitina.</p>','<img class="imaLeft" src="CompleteGeneral07_resources/media/hifas01.jpg" alt="Ima"  align="left"><p>El conjunto de hifas se denomina  <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>. </p><p> Los <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> de las hifas tabicadas pueden ser anucleares o multinucleares. Éstos migran a otros septos por una estructura denominada <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>, con el fin de reproducirse y realizar su respectivo intercambio <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly>. </p><p> Muchas especies de hongos llamados hasustorios poseen hifas <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> que penetran los organismos vivos para su <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> y absorción. Otros pueden <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> a distintos sustratos como rocas, cortezas, etc.</p>','<img class="imaLeft" src="CompleteGeneral07_resources/media/Micorrizas00.jpg" alt="Ima"  align="left"><p><input type="text" name="item20" id="item20" class="ardoraDropInput" readonly> es la relación <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> de los las raices de los arboles con las hifas.  </p><p> De acuerdo a su forma de <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly>, los hongos se clasifican en parásitos y <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly>. </p><p> Organismo <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly> es una planta o microorganismo que se alimenta de materias orgánicas en descomposición </p><p> Un organismo <input type="text" name="item25" id="item25" class="ardoraDropInput" readonly> vive a costa de otro.</p>'];
var answers=["ecosistemas","especializadas","núcleos","simbiótica","saprófito","multicelulares","eucariota","filamentos","multicelulares","Micelio","hifas","poro","pared celular","genético","heterótrofos","MICORRIZA","Quitina","digestión","adherirse","alimentarse","saprófitos","levaduras","parásito","plantas","hongo"];
var a=["NQ","MTc","MTQ","MjE","MjQ","Mw","Mg","MTA","MTE","MTM","OQ","MTU","MTI","MTY","Ng","MjA","OA","MTg","MTk","MjI","MjM","NA","MjU","Nw","MQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDc"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
