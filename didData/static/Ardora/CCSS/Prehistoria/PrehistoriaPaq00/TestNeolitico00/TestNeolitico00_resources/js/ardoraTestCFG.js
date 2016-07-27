//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=21; attempts=0; attemptsMax=1;
var score=0; scoreMax=21; scoreInc=1; scoreDec=1
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Actividad Finalizada!!!"; messageTime="Tiempo Fuera"; messageError="Intenta de Nuevo"; messageErrorG="Intenta de Nuevo"; messageAttempts="Intentos Agotados"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGVzdE5lb2xpdGljbzAw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Hace aproximadamente unos 10.000 años se produjo un cambio climático, que dio lugar a una serie de transformaciones muy importantes que se conocen con el nombre de","Se denomina revolución neolítica a la primera transformación radical de la forma de vida de la humanidad, que pasa de ser nómada a sedentaria y de economía depredadora (Caza,pesca y recolección) a productiva (agricultura y ganadería).","Se denomina revolución neolítica a la primera transformación radical de la forma de vida de la humanidad, que pasa de ser nómada a","Se denomina revolución neolítica a la primera transformación radical de la forma de vida de la humanidad, que pasa de ser nómada a sedentaria y de economía depredadora (Caza,pesca y recolección) a","Aparece como respuesta a la crisis climática que se produce en el comienzo del Holoceno, tras la última glaciación","Durante el Neolítico el clima se volvió más cálido y se produjeron cambios en la flora y en la fauna. Muchos animales emigraron buscando mejores condiciones climáticas y esto obligó a los seres humanos a buscar nuevas alternativas para sobrevivir","Las gentes del Neolítico eran Nómadas","de depredadores pasaron a productores, es decir, a producir los productos para reponer los que habían consumido.","Durante el neolítico En algunos lugares del mundo, la observación atenta de la naturaleza permitió a los seres humanos introducir cambios decisivos en la forma de conseguir los","Al producir sus propios alimentos, ya no tuvieron que desplazarse a otros lugares cada cierto tiempo y se volvieron sedentarios: se asentaron en lugares fijos y aparecieron los primeros","El excedente de producción de algunos productos permitió la aparición del","El primer animal domesticado fue el perro","Las primeras plantas que se cultivaron fueron los cereales: trigo, cebada, mijo, arroz, maíz~","El suministro constante de alimentos y la menor dependencia de la naturaleza permitieron el aumento de","En el neolítico se perfeccionó la fabricación de herramientas de piedra con la técnica del","el intercambio de unos productos por otros","La primera ciudad de la historia fué","como ya no era necesario que todos se dedicasen a conseguir alimentos, se desarrollaron diversas actividades artesanas: la cerámica, la cestería y el tejido.","Durante el periodo neolítico el arte continuó desarrollándose. Siguiendo la línea iniciada en la última etapa del Paleolítico, las principales manifestaciones artísticas continuaron centrándose en","Durante el periodo neolítico el arte continuó desarrollándose. Siguiendo la línea iniciada en la última etapa del Paleolítico, las principales manifestaciones artísticas continuaron centrándose en la pintura y la escultura","En el Neolítico, continuó la representación de figuras femeninas, relacionadas con el culto a - diosas madre."];
var answers1=["MVJldm9sdWNp824gTmVvbO10aWNh","ME1lc29s7XRpY28","MFBhbGVvbO10aWNv"];
var answers2=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers3=["MVNlZGVudGFyaWE","MENhemFkb3Jlcw","MFJlY29sZWN0b3Jlcw"];
var answers4=["MVByb2R1Y3RpdmE","MFNlZGVudGFyaW9z","MERlcHJlZGFkb3Jlcw"];
var answers5=["MVJldm9sdWNp824gTmVvbO10aWNh","ME1lc29s7XRpY28","MFBhbGVvbO10aWNv"];
var answers6=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers7=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers8=["MWdlbnRlcyBkZWwgbmVvbO10aWNv","MGdlbnRlcyBkZWwgcGFsZW9s7XRpY28"];
var answers9=["MUFsaW1lbnRvcw","MEFybWFtZW50b3M"];
var answers10=["MVBvYmxhZG9z","MEFybWFtZW50b3M","MEVzY3VsdHVyYXM"];
var answers11=["MUNvbWVyY2lv","MEFydGU"];
var answers12=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers13=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers14=["MVBvYmxhY2nzbg","MEd1ZXJyYXM"];
var answers15=["MVB1bGlkbw","MEZ1ZWdv"];
var answers16=["MVRydWVxdWU","MFJlbGlnafNu","MEFydGU"];
var answers17=["MUNhdGFsIEh1eXVj","MEFuYXRvbGlh"];
var answers18=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers19=["MVBpbnR1cmEgeSBFc2N1bHR1cmE","MENhemEgeSBQZXNjYQ"];
var answers20=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers21=["MVZlcmRhZGVybw","MEZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12,answers13,answers14,answers15,answers16,answers17,answers18,answers19,answers20,answers21];
var err=["","","","","","","","","","","","","","","","","","","","",""];
var ima=["clima.jpg","civiliz01.jpg","catalhuyc.jpg","agricultura.jpg","clima.jpg","clima.jpg","cavver.jpg","cultivos.jpg","cultivos.jpg","poblados.jpg","tejados.jpg","perro.jpg","agricultura.jpg","civiliz01.jpg","armas.jpg","religion.jpg","catalhuyuc01.jpg","ceramica.jpg","diosa.jpg","ceramica.jpg","diosa.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="TestNeolitico00_resources/media/";
colorText="#000000";colorButton="#259AE0";colorBack="#FFFFFF";colorSele="#72AAF6";goURLNext=true;goURLRepeat=true;tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
