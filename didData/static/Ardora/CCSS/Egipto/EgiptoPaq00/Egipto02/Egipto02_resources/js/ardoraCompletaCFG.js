//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=27; attempts=0; attemptsMax=1;
var score=0; scoreMax=27; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<img class="imaLeft" src="Egipto02_resources/media/mapaEgipto01.jpg" alt="Ima"  align="left"><p>ECONOMIA </p><p>  </p><p> Debido a los beneficios del <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, la economía egipcia se basó en la <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>. de productos como el <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>, higos, legumbres, lino y <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>,  </p><p>  </p><p> Se practicaba la <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> de reses, asnos y <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> </p><p> Se practicaba la caza de <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly></p>','<img class="imaLeft" src="Egipto02_resources/media/mapaEgipto06.jpg" alt="Ima"  align="left"><p>COMERCIO </p><p>  </p><p> Las <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> comerciales de los antiguos egipcios no se limitaban al <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> de productos agrícolas o de <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>, sino que también hay constancia de <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> para nutrir de bienes <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> y joyas el tesoro real de los <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly>, y de actividades de <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly> de esclavos</p>','<img class="imaLeft" src="Egipto02_resources/media/MapaEgipto02.jpg" alt="Ima"  align="left"><p>COMERCIO </p><p>  </p><p> En el Antiguo Egipto existía la figura de los <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly>, una especie de agentes <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> que efectuaban actividades de <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> al servicio de las grandes instituciones <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> (templos, palacio real, grandes <input type="text" name="item20" id="item20" class="ardoraDropInput" readonly> de la corona, etcétera). Pero también podían vender <input type="text" name="item21" id="item21" class="ardoraDropInput" readonly> a simples particulares, o podían realizar <input type="text" name="item22" id="item22" class="ardoraDropInput" readonly> comerciales al margen de las <input type="text" name="item23" id="item23" class="ardoraDropInput" readonly> en provecho propio.</p>','<img class="imaLeft" src="Egipto02_resources/media/mapaEgipto06.jpg" alt="Ima"  align="left"><p>HISTORIA POLÍTICA de egipto (3200 AC) </p><p>  </p><p> Tras ser <input type="text" name="item24" id="item24" class="ardoraDropInput" readonly> (el Alto y el Bajo Egiptos) por el rey <input type="text" name="item25" id="item25" class="ardoraDropInput" readonly>, el rey fue llamado <input type="text" name="item26" id="item26" class="ardoraDropInput" readonly> y repesentaba la unidad del <input type="text" name="item27" id="item27" class="ardoraDropInput" readonly></p>'];
var answers=["aves","transacciones","faraón","Menes (3200 AC)","instituciones","comerciales","materias primas","faraónicas","Ganadería","aceitunas","agricultura","trigo","rio Nilo","unificados","transacciones","explotaciones","venta","ornamentales","intercambio","expediciones","cerdos","pesca","pueblo","shutiu","esclavos","faraones","compraventa"];
var a=["Nw","OQ","MjY","MjU","MjM","MTc","MTE","MTk","NQ","NA","Mg","Mw","MQ","MjQ","MjI","MjA","MTU","MTM","MTA","MTI","Ng","OA","Mjc","MTY","MjE","MTQ","MTg"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="RWdpcHRvMDI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
