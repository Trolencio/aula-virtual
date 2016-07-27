//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=18; attempts=0; attemptsMax=1;
var score=0; scoreMax=18; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral04_resources/media/protistasclasificacion01.jpg" alt="Ima"  align="left"><p>Lo único que los protistas suelen tener en <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> es que no son animales, no son plantas, no son hongos y muchos son unicelulares. </p><p>  Aunque la mayoría de los organismos protistas son <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>, otros son pluricelulares sin tejidos especializados y ningún tipo de diferenciación <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. </p><p> Mantienen métodos de <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> autótrofos y heterótrofos</p>','<img class="imaLeft" src="CompleteGeneral04_resources/media/algas00.jpg" alt="Ima"  align="left"><p><input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>: Son autotrofos y unicelulares. Habitan lugares acuáticos o húmedos. se agrupan en verdes, doradas pardas y rojas. </p><p> <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly>: Son heterotrofos y unicelulares. Muchos forman colonias de aspecto viscoso. Es posible encontrarlos en restos de materia orgánica. Se les conoce como mohos acuáticos debido a su parecido con los miembros del reino <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>. Se alimentan por <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> y se reproducen de manera sexual y asexual. Muchos oomicetes son parásitos y otros son <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral04_resources/media/protistatipos00.jpg" alt="Ima"  align="left"><p>Protozoos: Los protozoarios o protozoos son organismos unicelulares, eucariontes y <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> que se encuentran en <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> acuáticos o húmedos. Casi todos son <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> y su cuerpo puede estar rodeado por una membrana de secreción situada encima de la membrana <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly>. </p><p>  </p><p> Según sus formas de <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> los protozoarios son: Flagelados, Ciliados, Sarcodinos, Esporozoarios.</p>','<img class="imaLeft" src="CompleteGeneral04_resources/media/parasitos00.jpg" alt="Ima"  align="left"><p><input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>. Se desplazan por flagelos. Cuentan con uno o más flagelos, es decir, estructuras con forma de látigo. Algunos protozoarios flagelados son parásitos. Ejemplo: Euglena. </p><p> <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly>. Utilizan cilios para moverse. Organismos con numerosos cilios, estructuras que semejan pelos. Ejemplo: paramecio. </p><p> <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly>. Se desplazan mediante pseudópodos. Son una especie de falsos pies a los que se denomina pseudópodos. pseudópodos son extensiones del citoplasma. Ejemplo: amebas </p><p> <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly>. Carecen de estructura de locomoción. Son organismos microscópicos que parasitan a los animales. Ejemplo: plasmodium</p>'];
var answers=["absorción","plasmática","nutrición","hábitats","celular","Algas","Mohos Deslizantes","locomoción","Fungi","Ciliados","heterótrofos","saprofitos","microscópicos","Flagelados","Sarcodinos","Esporozoarios","común","unicelulares"];
var a=["OA","MTM","NA","MTE","Mw","NQ","Ng","MTQ","Nw","MTY","MTA","OQ","MTI","MTU","MTc","MTg","MQ","Mg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMDQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
