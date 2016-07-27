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
var timeOnMessage=2; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="Mesopotamia02_resources/media/orgsocmesop.jpg" alt="Ima"  align="left"><p>ESTRUCTURA SOCIAL  </p><p> El <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> era la principal autoridad. Era primer sacerdote, jefe del ejército, máxima autoridad administrativa  </p><p> Luego estaban los <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> (nobles, sacerdotes, funcionarios reales, comerciantes y aldeanos)  </p><p> Los <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> eran personas que compraban su libertad  </p><p> Finalmente estaban los <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> que eran prisioneros de guerra. Estos últimos eran la clase más explotada.</p>','<img class="imaLeft" src="Mesopotamia02_resources/media/moneda.jpg" alt="Ima"  align="left"><p>La ECONOMÍA  </p><p> la economía mesopotámica se basaba en la agricultura y ganaderìa: </p><p> la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> (trigo, cebada, datiles, uvas y aceitunas),  </p><p> la <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> (vacas, ovejas, cabras, cerdos y asnos),  </p><p> la <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> (cerámica, tejidos, cuero...) y  </p><p> el <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> (importación de materias primas).  </p><p> Se empezaron a utilizar <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> en los intercambios.</p>','<img class="imaLeft" src="Mesopotamia02_resources/media/cuneiforme.jpg" alt="Ima"  align="left"><p>LA ESCRITURA.  </p><p>  </p><p> En estas tierras mesopotámicas apareció la escritura hacia el 3500 a.C. Las necesidades <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> derivadas de las tareas agrícolas y del control de los <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>  propiciaron el nacimiento de la <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly>. Poco a poco, esta técnica se <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> a los procedimientos <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> (leyes), a la literatura, a la religión y a la <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Mesopotamia02_resources/media/escultura.jpg" alt="Ima"  align="left"><p>En ARQUITECTURA  </p><p> usaron como material constructivo el <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> (cubierto normalmente con betún para protegerlo) y como elementos sustentados el <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> y la <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly>. Los edificios principales fueron los <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> y los templos o <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>. Para ocultar la pobreza constructiva del adobe se revestían de <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> vidriada con motivos florales, geométricos o con <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> de caza o guerra.</p>'];
var answers=["extendió","Rey","palacios","artesanía","contables","Esclavos","agricultura","zigurats","cerámica","bóveda","ganadería","tributos","adobe","escenas","Hombres Libres","escritura","arco","Libertos","comercio","monedas","estatales","ciencia"];
var a=["MTM","MQ","MTk","Nw","MTA","NA","NQ","MjA","MjE","MTg","Ng","MTE","MTY","MjI","Mg","MTI","MTc","Mw","OA","OQ","MTQ","MTU"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWVzb3BvdGFtaWEwMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#5E651F";colorBack="#FEFEF0";colorSele="#EAD77E";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
