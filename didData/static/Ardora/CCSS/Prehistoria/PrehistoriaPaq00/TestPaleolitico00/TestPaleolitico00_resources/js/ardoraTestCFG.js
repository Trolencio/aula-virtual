//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=22; attempts=0; attemptsMax=1;
var score=0; scoreMax=22; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime="Tiempo Fuera"; messageError="Intenta de Nuevo"; messageErrorG="Intenta de Nuevo"; messageAttempts="Intentos Agotados"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGVzdFBhbGVvbGl0aWNvMDA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Es el primer periodo de la Prehistoria. Empezó hace dos millones de años, con la aparición de los primeros seres humanos. Terminó, aproximadamente, 5.000 años antes de Cristo, con el descubrimiento de la agricultura y la ganadería.","Las gentes del Paleolítico vivian en pequeños grupos y se alimentaban de la caza, la pesca y la recolección de frutos salvajes.","Nuestros antepasados del Paleolítico eran depredadores, es decir, consumían recursos naturales son preocuparse de reponerlos. Para alimentarse, cazaban, pescaban y recolectaban frutos y plantas. Por eso se les denomina","Como no producían alimentos, se veían obligados a desplazarse a otros lugares cuando la comida se agotaba. Por eso eran","Las gentes del Paleolítico vivían en ciudades","Vivían en cuevas o, cuando el clima era más cálido, en asentamientos al aire libre.","Habitaban en cuevas o en sencillas cabañas.","Los humanos vivían en pequeños grupos, de unos 20 a 50 miembros, unidos por lazos familiares.","Las gentes del paleolítico eran sedentarias","Como no producían alimentos, se veían obligados a desplazarse a otros lugares cuando la comida se agotaba. Por eso eran nómadas. Vivían en cuevas o, cuando el clima era más cálido, en asentamientos al aire libre.~","En las tribus los miembros más importantes eran las personas que más aportaban a la supervivencia del grupo: los cazadores más hábiles, los hechiceros o curanderos y los ancianos, que aportaban su experiencia para solucionar los problemas.","Se encargaban de cuidar de los niños, recolectar frutos y capturar animales de pequeño tamaño, mantener el fuego encendido, curtir pieles,","Se encargaban de cazar, fabricar herramientas y de la defensa de la tribu.","Al principio aprendieron a controlar el fuego y mantenerlo encendido, alimentándolo con madera. Después fueron capaces de producirlo a voluntad.","Éste fue un avance de gran importancia, puesto que mejoró considerablemente la vida: el fuego proporcionaba calor y luz por las noches, permitía cocinar los alimentos y servía para ahuyentar a las fieras.","Cortando y puliendo piedras, huesos y maderas","Se elaboraban instrumentos especializados para usos concretos: cortar, raspar, cazar, perforar. Inicialmente la técnica de talla era bastante rudimentaria, pero con el paso del tiempo fue","Confeccionaban sus vestidos con","Son pinturas realizadas en los techos y paredes de las cuevas.","se trata de objetos artísticos que podían ser transportados, como estatuillas o plaquetas con grabados","Las primeras muestras de arte fueron","Las muestras más conocidas de arte mobiliar son las llamadas Venus, estatuillas femeninas con formas  muy marcadas (caderas anchas, bustos prominentes, vientres abultados), lo que ha llevado a pensar que estuvieron relacionadas con el culto a la"];
var answers1=["MVBhbGVvbO10aWNv","ME1lc29s7XRpY28","ME5lb2ztdGljbw"];
var answers2=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers3=["MWNhemFkb3JlcyB5IHJlY29sZWN0b3Jlcw","MHNlZGVudGFyaW9z","MGFncmljdWx0b3JlcyB5IGdhbmFkZXJvcw"];
var answers4=["MU7zbWFkYXM","MFNlZGVudGFyaW9z","MERlcHJlZGFkb3Jlcw"];
var answers5=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers6=["MWdlbnRlcyBkZWwgUGFsZW9s7XRpY28","MGdlbnRlcyBkZWwgTmVvbO10aWNv","MGdlbnRlcyBkZWwgTWVzb2ztdGljbw"];
var answers7=["MWdlbnRlcyBkZWwgUGFsZW9s7XRpY28","MGdlbnRlcyBkZWwgTmVvbO10aWNv"];
var answers8=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers9=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers10=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers11=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers12=["MU11amVyZXM","MEhvbWJyZXM","ME5p8W9z"];
var answers13=["MUhvbWJyZXM","ME11amVyZXM","ME5p8W9z"];
var answers14=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers15=["MUNvbnRyb2wgZGVsIEZ1ZWdv","MENyZWFjaW9uIGRlIEFzZW50YW1pZW50b3M"];
var answers16=["MWZhYnJpY2FiYW4gaGVycmFtaWVudGFz","MGZhYnJpY2FiYW4gc3Ugcm9wYQ"];
var answers17=["MUV2b2x1Y2lvbmFuZG8","MEludm9sdWNpb25hbmRv"];
var answers18=["MVBpZWxlcw","MFRlamlkb3M","MFRlbGFz"];
var answers19=["MVBpbnR1cmFzIFJ1cGVzdHJlcw","MFBpbnR1cmFzIGFsIE9sZW8"];
var answers20=["MUFydGUgTW9iaWxpYXI","MEFydGUgY29udGVtcG9y4W5lbw"];
var answers21=["MVBpbnR1cmFzIHJ1cGVzdHJlcyB5IEFydGUgbW9iaWxpYXI","MEVsYWJvcmFjafNuIGRlIEFybWFtZW50bw","MEluc3RydW1lbnRvcyBBZ3LtY29sYXM"];
var answers22=["MUZlcnRpbGlkYWQ","MENhemE","MEx1bmE"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12,answers13,answers14,answers15,answers16,answers17,answers18,answers19,answers20,answers21,answers22];
var err=["","","","","","","","","","","","","","","","","","","","","",""];
var ima=["paleolitico.jpg","pesca.jpg","cazarec.jpg","nomads.jpg","armas.jpg","cuevas.jpg","nomads.jpg","chozas.jpg","hombres.jpg","abandonar.jpg","sociales.jpg","mujeres.jpg","hombres.jpg","fuego.jpg","cuevas.jpg","armas00.jpg","armas.jpg","pieles.jpg","arterup.jpg","artemobiliar.jpg","arterup.jpg","diosa.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="TestPaleolitico00_resources/media/";
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
