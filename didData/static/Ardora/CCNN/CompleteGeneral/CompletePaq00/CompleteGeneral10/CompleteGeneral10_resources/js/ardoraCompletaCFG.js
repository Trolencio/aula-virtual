//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=19; attempts=0; attemptsMax=1;
var score=0; scoreMax=19; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="CompleteGeneral10_resources/media/cerveza02.jpg" alt="Ima"  align="left"><p>Utilización de los hongos </p><p> Es conocida la pasión buscadora de setas en algunas culturas claramente micófilas o la implicación de las levaduras en la <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> de cerveza y pan.  </p><p> Los hongos nos han provocado molestias, participando en el <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> de alimentos o causando enfermedades <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>.  </p><p> En la medicina, la utilización de los <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> en la práctica médica comendo cuando se descubrieron las propiedades antibióticas de la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="CompleteGeneral10_resources/media/antibiotico00.jpg" alt="Ima"  align="left"><p>Utilización de los hongos </p><p> La <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> es un importante antibiótico que se obtiene del moho penicillium notatum. </p><p> En la industria <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, los hongos llevan a cabo una función muy importante, en la elaboración del pan, para que este sea esponjoso.  </p><p> la <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> del pan (saccharomyces cerevisiae), es el hongo perteneciente a los ascomicetes. </p><p> Las <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> hidrolíticas se utilizan en diversos procesos INDUSTRIALES</p>','<img class="imaLeft" src="CompleteGeneral10_resources/media/hifas01.jpg" alt="Ima"  align="left"><p>Utilización de los hongos </p><p> Los hongos nos acompañan desde tiempos inmemoriales en nuestra dieta y como agentes <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>. </p><p> MICORRIZA: En esta asociaciòn los hongos se alimentan usando los azúcares de la <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly> y la planta se beneficia usando las <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> de filamento o hifas de la <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> como extensiones de las <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> de la planta.</p>','<img class="imaLeft" src="CompleteGeneral10_resources/media/Micorrizas00.jpg" alt="Ima"  align="left"><p>Utilización de los hongos </p><p> MICORRIZA:  Esta asociaciòn da acceso a la planta colonizada a <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly> inmóviles como el fósforo, cobre y zinc. Ademas que la asociacion ha demostrado que ayuda a la planta a resistir <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly>, mejorar la capacidad de la planta para <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> bajo condiciones de <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> y mejorar la capacidad del suelo para retener y absorber el <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly>.</p>'];
var answers=["enzimas","estructuras","micorriza","antibióticos","deterioro","sequía","nutrientes","infecciosas","penicilina","enfermedades","raices","crecer","agua","producción","penicilina","alimentaria","biotecnológicos","levadura","planta"];
var a=["OQ","MTI","MTM","NA","Mg","MTg","MTU","Mw","NQ","MTY","MTQ","MTc","MTk","MQ","Ng","Nw","MTA","OA","MTE"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q29tcGxldGVHZW5lcmFsMTA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
