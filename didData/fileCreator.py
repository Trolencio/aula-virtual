#!/usr/bin/env python
# -*- coding: latin-1 -*-


from django.shortcuts import redirect
import os
from django.core.files import File
from .models import Materia
from .models import Tema
from .models import TipoActividad
from .models import Actividad
from .models import actividadDet
from .models import mediaInActividad

def createFileVerticalTabs(actividadesDet, pk):
    nombrearchivo = getNewTabFileName(pk)

    #crear y abrir el archivo temporal
    archivo = open(nombrearchivo, "w+") 

    #archivo.write("<!doctype html>\n")
    
    archivo.write("<html>\n")
    archivo.write("<meta charset='latin-1'>\n")
    archivo.write("<head>\n")

    #archivo.write("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>\n")
    #archivo.write("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css'>\n")
    archivo.write("{% load staticfiles %}\n")
    
    archivo.write("<link rel='stylesheet' href='http://yui.yahooapis.com/pure/0.6.0/pure-min.css'>    \n")
    archivo.write("<link rel='stylesheet prefetch' href='http://fontawesome.io/assets/font-awesome/css/font-awesome.css'>\n")
    archivo.write("<link rel='stylesheet' type='text/css' href='{% static 'css/pureCssSlidingTabs.css' %}' />\n")
    archivo.write("<link rel='stylesheet' type='text/css' href='{% static 'cssttp/pureCssToolTip.css' %}' />\n")
    archivo.write("</head>\n")

    nombreactividad = actividadesDet.first().idActividad.nombre
    
    nombreactividad = resolverAcentos(nombreactividad)
    
    archivo.write("<body>\n")
    
    archivo.write("\t<div class='page-header'>\n")
    archivo.write("\t\t<div class='row'>\n")
    archivo.write("\t\t\t<div class='col-md-1'>\n")
    archivo.write("\t\t\t</div>\n")
    archivo.write("\t\t\t<div class='col-md-5'>\n")
    archivo.write("\t\t\t\t<h1>" + nombreactividad + "</h1>\n")
    archivo.write("\t\t\t</div>\n")
    archivo.write("\t\t</div>\n")
    archivo.write("\t</div>\n")
    
    #archivo.write("<div class='content'>\n") 
    
    archivo.write("\t<div class='tabGroup'>\n")
    #por cada item de detalle en actividad
    tabItem = 1
    for detalle in actividadesDet.iterator():
        
        #Tomar el valor del campo contenido del registro
        actDetCon = detalle.contenido
        #hay un elemento en el arreglo por cada palabra en contenido
        actDetConArr = actDetCon.split('/')
        
        if tabItem == 1:
            strIn = "\t\t<input type='radio'  name='tabGroup1' id='rad" + str(tabItem) + "' class='tab" + str(tabItem) + "' checked='checked'/>\n"
           
        else:
            strIn = "\t\t<input type='radio' name='tabGroup1' id='rad" + str(tabItem) + "' class='tab" + str(tabItem) + "' />\n"
           
        archivo.write(strIn)
        tabItem = tabItem + 1
        
        
    if not actividadesDet:
        archivo = open(nombrearchivo, "w+")
        archivo.write('no hay detalle para esta Actividad')
        
    archivo.write("\t\t<div class='tablabels'>\n")
    tabItem = 1
    #por cada item de detalle en actividad
    for detalle in actividadesDet.iterator():
        
        #Tomar el valor del campo contenido del registro
        actDetIcon = resolverAcentos(detalle.imagen)
        actDetNombre = resolverAcentos(detalle.nombre)
        strIn = "\t\t\t<label for='rad" + str(tabItem) + "' title= '" + actDetNombre + "' class='fa fa-" + actDetIcon + "'></label>\n"

        archivo.write(strIn)  
        tabItem = tabItem + 1
        
    
    archivo.write("\t\t</div>\n")
    
    
    
    archivo.write("\t\t<div class='btabcontent'></div>\n")
    archivo.write("\t\t<div class='tabcontent'>\n")
    #por cada item de detalle en actividad
    tabItem = 1
    for detalle in actividadesDet.iterator():

        #Tomar el valor del campo contenido del registro
        actDetNombre = resolverAcentos(detalle.nombre)
        
        actDetCont = generarDetalle(detalle.idActividad.identificacion, detalle.contenido)
        
        actDetCont = resolverAcentos(actDetCont)

        strIn = "\t\t\t<div class='tab" + str(tabItem) + "'>\n"
        
        archivo.write(strIn)     
        archivo.write("\t\t\t\t<legend>" + actDetNombre + "</legend>\n") 
        
        archivo.write("\t\t\t\t<p >" + actDetCont + "</p>\n") 
        
        archivo.write("\t\t\t</div>\n")#del tab
        tabItem = tabItem + 1
        
        
    
    archivo.write("\t\t</div>\n")#del tabcontent
    archivo.write("\t</div>\n")#del btabcontent
    #archivo.write("</div>\n")#del tabGroup
    archivo.write("</body>\n")
    archivo.write("</html>")
    #cerrar el archivo
    archivo.close    
    
    return nombrearchivo

def generarDetalle(vidActividad, vcontenido):
    #filtrar registros de mediaInAct con idActividad=idActividad y palabra=contenido(i)
    
    arrCon = vcontenido.split("/")
    nuevoCon = ""     
    
    for vpalabra in arrCon:
        
        if vpalabra:
            media = mediaInActividad.objects.filter(idActividad=vidActividad, palabra=vpalabra).first()
            
            if media:
                strTipTit = media.titulo
                strTipCon = media.contenido
                strTipImg = media.imagen
                strImgExt = media.extension
                
                strTipTit = resolverAcentos(strTipTit)
                strTipCon = resolverAcentos(strTipCon)
                strTipImg = resolverAcentos(strTipImg)
                
                strTemp = ""
                if strTipImg != "no":
                    2
                    strTemp = strTemp + "<a href='#' class='tooltip'  style='color:#3AE2CE' >\n"
                    strTemp = strTemp + "\t" + vpalabra + "\n"
                    strTemp = strTemp + "\t<span>\n"
                    strTemp = strTemp + "\t\t<img class='callout' src='{% static 'cssttp/callout.gif' %}' />\n"
                    
                    #investigar si en imagen hay un link o un nombre de archivo
                    if strImgExt=='no':
                        strTemp = strTemp + "\t\t<img src='" + strTipImg + "' style='float:right; height : 150px;' />\n"
                    else:
                        strTemp = strTemp + "\t\t<img src='{% static 'img/" + strTipImg + "." + strImgExt + "' %}' style='float:right;' />\n"
                    
                    strTemp = strTemp + "\t\t<strong>" + strTipTit + "</strong><br />\n"
                    strTemp = strTemp + "\t\t" + strTipCon + "\n"
                    strTemp = strTemp + "\t</span>\n"
                    strTemp = strTemp + "</a>\n"
                    
                else:
                    strTemp = strTemp + "<a href='#' class='tooltip' style='color:#3AE2CE'>\n"
                    strTemp = strTemp + "\t" + vpalabra + "\n"
                    strTemp = strTemp + "\t<span>\n"
                    strTemp = strTemp + "\t\t<img class='callout' src='{% static 'cssttp/callout.gif' %}' />\n"
    
                    strTemp = strTemp + "\t\t<strong>" + strTipTit + "</strong><br />\n"
                    strTemp = strTemp + "\t\t" + strTipCon + "\n"
                    strTemp = strTemp + "\t</span>\n"
                    strTemp = strTemp + "</a>\n"
                    
                nuevoCon = nuevoCon + strTemp
            else:
                strTipTit = ""
                strTipCon = ""
                strTipImg = ""
                
                nuevoCon = nuevoCon + vpalabra    
        
        #else:
        #    nuevoCon = nuevoCon + vpalabra
    
    return nuevoCon 
            


def getNewTabFileName(idActividad):
    fileName = 'generadoTab' + "_" + str(idActividad) + '.html'
    #revisar esto
    #Local
    #fullfileName = os.path.join(os.path.abspath('didData/templates/didData/generado'), fileName)
    
    #server
    fullfileName = '/home/trolencio/aula-virtual/didData/templates/didData/generado/' + fileName
    
    #fullfileName = "didData/static/" + fileName
    #fullfileName = 'didData/generado/generadoTab_' + str(idActividad) + '.html'

    
    return fullfileName

def escribirCodigo(archivo, codigo):
    archivo.write(codigo) 
    
    return archivo

def resolverAcentos(nombreactividad):
    
    nombreactividad = nombreactividad.replace('á', '&aacute;')
    nombreactividad = nombreactividad.replace('é', '&eacute;')
    nombreactividad = nombreactividad.replace('í', '&iacute;')
    nombreactividad = nombreactividad.replace('ó', '&oacute;')
    nombreactividad = nombreactividad.replace('ú', '&uacute;')
    nombreactividad = nombreactividad.replace('ñ', '&ntilde;')
    
    
    return nombreactividad