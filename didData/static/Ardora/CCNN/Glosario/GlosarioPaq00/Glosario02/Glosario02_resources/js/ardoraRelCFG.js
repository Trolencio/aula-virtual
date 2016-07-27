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
var wordsGame="R2xvc2FyaW8wMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Herpes</p>","<p>Hongo</p>","<p>Lactosa</p>","<p>Microscópico</p>","<p>Meningitis</p>","<p>Procariótico</p>","<p>Protozoo</p>","<p>Reproducción asexual</p>"];
var iL=["<div  align='center'><img src='Glosario02_resources/media/herpes00.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/Fungi01.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/lactosa00.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/microscopico04.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/meningitis00.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/celula00.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/protistatipos00.jpg'></div>","<div  align='center'><img src='Glosario02_resources/media/repasex00.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Perteneciente o relativo al microscopio. Hecho con ayuda del microscopio. Vistas, observaciones microscópicas.Tan pequeño que no puede verse sino con el microscopio. Muy pequeño.</p>","<p>consiste en que de un organismo se desprende una sola célula o trozos del cuerpo de uno ya desarrollado, que por procesos mitóticos, son capaces de formar un individuo completo genéticamente idéntico a él. Se lleva a cabo con un solo progenitor y sin la intervención de los núcleos de las células sexuales o gametos.</p>","<p>es una enfermedad , caracterizada por la inflamación de las meninges (leptomeninges). El 80% de las meningitis está causada por virus, entre el 15 y el 20% por bacterias, el resto está originada por intoxicaciones, hongos, medicamentos y otras enfermedades. La meningitis es poco frecuente pero potencialmente letal.</p>","<p>cuyo material genético se encuentra disperso en el citoplasma, reunido en una zona denominada nucleoide. Por el contrario, las células que sí tienen un núcleo diferenciado del citoplasma, se llaman eucariotas, es decir aquellas cuyo ADN se encuentra dentro de un compartimiento separado del resto de la célula.</p>","<p>son organismos microscópicos, unicelulares Eucariotas; heterótrofos, fagótrofos, depredadores o detritívoros, a veces mixótrofos (parcialmente autótrofos); que viven en ambientes húmedos o directamente en medios acuáticos, ya sean aguas saladas o aguas dulces; la reproducción puede ser asexual por bipartición y también sexual por isogametos o por conjugación intercambiando material genético.</p>","<p>planta talofita, sin clorofila, de tamaño muy variado y reproducción preferentemente asexual, por esporas. Es parásita o vive sobre materias orgánicas en descomposición. Su talo, ordinariamente filamentoso y ramificado y conocido con el nombre de micelio, absorbe los principios orgánicos nutritivos que existen en el medio; p. ej., el cornezuelo, la roya, el agárico, etc.</p>","<p>erupción que aparece en puntos aislados de la piel, por lo común crónica y de muy distintas formas, acompañada de comezón o escozor.</p>","<p>cada una de las plantas talofitas, unicelulares o pluricelulares, que viven de preferencia en el agua, tanto dulce como marina, y que, en general, están provistas de clorofila acompañada a veces de otros pigmentos de colores variados que la enmascaran. azúcar que contiene la leche, formado por glucosa y galactosa.</p>"]; ansRL=["Ng","NQ","Nw","MA","Mg","Mw","NA","MQ"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
