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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime=""; messageError="Intenta Nuevamente"; messageErrorG="Intenta Nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R2xvc2FyaW8wMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Unicelular</p>","<p>Tétanos</p>","<p>Vacuna</p>","<p>Varicela</p>","<p>Virus</p>","<p>autótrofos</p>","<p>Malaria</p>","<p>Micorriza</p>"];
var iL=["<div  align='center'><img src='Glosario03_resources/media/bacilos01.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/tetano00.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/vacuna01.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/Varicela.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/virus05.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/bacteriaanimada02.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/gripe04.jpg'></div>","<div  align='center'><img src='Glosario03_resources/media/micorrizas01.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>enfermedad muy grave producida por un bacilo que penetra generalmente por las heridas y ataca el sistema nervioso. Sus síntomas principales son la contracción dolorosa y permanente de los músculos, y la fiebre.</p>","<p>es la relación simbiótica de los las raices de los arboles con las hifas.</p>","<p>es un preparado de antígenos que una vez dentro del organismo provoca la producción de anticuerpos y con ello una respuesta de defensa ante microorganismos patógenos. Esta respuesta genera, en algunos casos, cierta memoria inmunitaria produciendo inmunidad transitoria frente al ataque patógeno correspondiente</p>","<p>es una enfermedad contagiosa causada por el virus de la varicela zóster, un virus de la familia de los herpesvirus que también es el causante del herpes zóster. Es una de las enfermedades clásicas de la infancia, que en los niños suele ser leve pero en adolescentes y adultos tiene mayor riesgo de complicaciones. La enfermedad dura alrededor de una semana.</p>","<p>está formado por una única célula</p>","<p>organismo de estructura muy sencilla, compuesto de proteínas y ácidos nucleicos, y capaz de reproducirse solo en el seno de células vivas específicas, utilizando su metabolismo.</p>","<p>sintetizan sus alimentos a partir de sustancias inorgánicas</p>","<p>Esta enfermedad está causada por el protozoo Plasmodium. Si el mosquito pica a un ser humano, los microorganismos patógenos migran desde la saliva del animal al hígado. Allí se provoca una división crucial múltiple, que consigue invadir la sangre de este.</p>"]; ansRL=["NA","MA","Mg","Mw","NQ","Ng","Nw","MQ"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
