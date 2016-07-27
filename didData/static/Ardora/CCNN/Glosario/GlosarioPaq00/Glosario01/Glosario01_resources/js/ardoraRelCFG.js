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
var wordsGame="R2xvc2FyaW8wMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Acelular</p>","<p>Ácido nucléico</p>","<p>Alga</p>","<p>Bacteria</p>","<p>Cápside</p>","<p>Célula</p>","<p>Envoltura</p>","<p>Gripe</p>"];
var iL=["<div  align='center'><img src='Glosario01_resources/media/virus01.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/estructura02.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/algas00.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/crecimientobacteriano.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/virus00.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/celulaanimal.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/celula00.jpg'></div>","<div  align='center'><img src='Glosario01_resources/media/gripe03.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>significa literalmente \"sin células\". Se aplica principalmente a los virus, pero también a provirus y viroides, que son entidades biológicas no formadas por células, a diferencia de bacterias, compuestas por células procariotas, y de hongos, vegetales y animales, formados por células eucariotas.</p>","<p>es una estructura proteica formada por una serie de monómeros llamados capsómeros. En el interior de esta cápside se encuentra siempre el material genético del virus. Puede estar rodeada por una envoltura. Cada capsómero puede estar constituido por una o varias proteínas distintas. El término nucleocápside se refiere al material genético envuelto en su cápside.</p>","<p>microorganismo unicelular procarionte, cuyas diversas especies causan las fermentaciones, enfermedades o putrefacción en los seres vivos o en las materias orgánicas.</p>","<p>es la unidad morfológica y funcional de todo ser vivo. De hecho, la célula es el elemento de menor tamaño que puede considerarse vivo.</p>","<p>es una enfermedad infecciosa de aves y mamíferos causada por un tipo de virus de ARN de la familia de los Orthomyxoviridae. En los seres humanos afecta a las vías respiratorias, inicialmente puede ser similar a un resfriado y con frecuencia se acompaña de síntomas generales como dolor de garganta, debilidad, dolores musculares (mialgias), dolor estomacal, articulares (artralgias) y de cabeza (cefa</p>","<p>son grandes polímeros formados por la repetición de monómeros denominados nucleótidos, unidos mediante enlaces fosfodiéster. Se forman, así, largas cadenas; algunas moléculas de ácidos nucleicos llegan a alcanzar tamaños gigantescos, con millones de nucleótidos encadenados. Los ácidos nucleicos almacenan la información genética de los organismos vivos y son los responsables de la herencia.</p>","<p>cada una de las plantas talofitas, unicelulares o pluricelulares, que viven de preferencia en el agua, tanto dulce como marina, y que, en general, están provistas de clorofila acompañada a veces de otros pigmentos de colores variados que la enmascaran. El talo de las pluricelulares tiene forma de filamento, de cinta o de lámina y puede ser ramificado.</p>","<p>comprende la membrana citoplasmática y la pared celular más una membrana externa, si ésta existe. La mayoría de las envolturas celulares bacterianas caen en dos categorías importantes: Gram-positiva y Gram-negativa. Éstas se distinguen por su reacción a la tinción de Gram.</p>"]; ansRL=["MA","NQ","Ng","Mg","MQ","Mw","Nw","NA"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
