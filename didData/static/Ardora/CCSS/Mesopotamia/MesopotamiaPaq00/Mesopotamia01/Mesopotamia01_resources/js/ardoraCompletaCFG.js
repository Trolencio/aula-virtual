//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=28; attempts=0; attemptsMax=1;
var score=0; scoreMax=28; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="Mesopotamia01_resources/media/mesopotamia00.jpg" alt="Ima"  align="left"><p>MESOPOTAMIA significa, TIERRA ENTRE DOS RÍOS  </p><p> La <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, según parece confirmar la arqueología, empezó en Sumer.  </p><p> Mesopotamia se encuentra situada en <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> Próximo, entre los <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> Tigris y Éufrates, en el Suroeste de <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>, donde hoy están los territorios de <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly>. Allí, en un contexto geográfico marcado por la <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> de sus tierras, se desarrollaron las primeras <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>, rodeadas de <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>, centros de un territorio que se dedica a la <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> de regadío y al <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Mesopotamia01_resources/media/mesopotamiaubicacion00.jpg" alt="Ima"  align="left"><p>GEOGRAFÏA </p><p>  </p><p> La Alta y Baja <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>. </p><p> Al Norte la <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> Mesopotamia o ASIRIA (habitada por los asirios). Se extendìa a ambos màrgenes del tigris. Es una zona <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> donde se construyeron ciudades como <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly>. </p><p> Al Sur, la <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly> Mesopotamia. Era una <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> en la cual surgieron ciudades-estado como <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Mesopotamia01_resources/media/mesopotamia00.jpg" alt="Ima"  align="left"><p>HISTORIA POLITICA </p><p>  </p><p> En ej año 2200 AC los <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> se apoderaron de babilonia.  </p><p> Uno de sus gobernantes, <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> se convitió en rey babilonio, a éste gobernante lo conocemos además por su célebre <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly>.  </p><p> Durante este periodo la ciudad se transformó en una de las mas poderosas de Mesopotamia y sus <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> se extendieron hasta <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly>.</p>','<img class="imaLeft" src="Mesopotamia01_resources/media/orgsocmesop.jpg" alt="Ima"  align="left"><p>ORGANIZACION SOCIAL </p><p> En un principio, los <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly>, desde los templos, llamados zigurats, controlaban la <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly>, el comercio e imponían los <input type="text" name="item25" id="item25" class="ardoraDropInput" readonly>.  </p><p> Poco a poco, los conflictos entre las ciudades hicieron aparecer a caudillos <input type="text" name="item26" id="item26" class="ardoraDropInput" readonly>, que se convertirían en <input type="text" name="item27" id="item27" class="ardoraDropInput" readonly>.  </p><p> Estas guerras, además, hicieron aumentar el número de <input type="text" name="item28" id="item28" class="ardoraDropInput" readonly>.</p>'];
var answers=["Oriente","Baja","Irak y Siria","agricultura","dominios","Hammurabi","Siria","sacerdotes","reyes","impuestos","agricultura","guerreros","esclavos","pastoreo","amoritas","Mesopotamia","civilización","Alta","murallas","Código Legal","fertilidad","ríos","ciudades","Fertil llanura","Ur, Uruk y Babilonia","montañosa","Asia","Assur y Nínive"];
var a=["Mg","MTU","NQ","OQ","MjE","MTk","MjI","MjM","Mjc","MjU","MjQ","MjY","Mjg","MTA","MTg","MTE","MQ","MTI","OA","MjA","Ng","Mw","Nw","MTY","MTc","MTM","NA","MTQ"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWVzb3BvdGFtaWEwMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#5E651F";colorBack="#FEFEF0";colorSele="#EAD77E";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
