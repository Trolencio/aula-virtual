from django.shortcuts import redirect
import os
from django.core.files import File
from .models import Materia
from .models import Tema
from .models import TipoActividad
from .models import Actividad
from .models import ActividadDet
from .models import MediaInActividad

from .fileCreator import createFileVerticalTabs

from .forms import temaForm
from django.shortcuts import render, get_object_or_404
from django.http import Http404


# Create your views here.

def indiceTemas(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    temas = Tema.objects.filter(activa=True).order_by('idMateria')
    return render(request, 'didData/index.html', { 'Materias' : materias, 'Temas' : temas })

def detalleTema(request, pk):
    tema = get_object_or_404(Tema, id=pk) #objeto Tipo Tema identificacion = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado
    var_idTema = tema.id
    actividades = Actividad.objects.filter(idTema=var_idTema).select_related('idTema')

    return render(request, 'didData/detalleTema.html', {'Actividades': actividades})

def detalleActividadArdora(request, pk):
    estaactividad = get_object_or_404(Actividad, id=pk) #objeto tipo Actividad identificacion = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado

    #actividadesDet = get_object_or_404(ActividadDet, idActividad=pk)
    #ActividadDet.objects.filter(idActividad=estaactividad.identificacion)
    actividadArdoraDet = ActividadDet.objects.filter(idActividad=estaactividad.id).select_related('idActividad')
    
    #actividadArdoraDet = actividadesDet.select_related('idActividad')
    return render(request, 'didData/detalleActividadArdora.html', {'ActividadDet': actividadArdoraDet})

def detalleActividadPython(request, pk):
    estaactividad = get_object_or_404(Actividad, id=pk) #objeto tipo Actividad id = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado
    actividadesDet = ActividadDet.objects.filter(idActividad=estaactividad.id).order_by('identificacion')
    #actividadesDet = get_object_or_404(ActividadDet, idActividad=pk).order_by('identificacion')
    #generar el archivo local
    
    #nombrearchivo = createFileVerticalTabs(actividadesDet, pk)
    
    if actividadesDet:
        nombrearchivo = createFileVerticalTabs(actividadesDet, pk)
    else:
        return render(request, 'didData/enConstruccion.html', {'Actividad': estaactividad}) 
        #raise Http404("NO SE HA DEFINIDO DETALLE PARA ESTA ACTIVIDAD")    
    
    #generar el archivo en aula-virtual
    #    '/home/trolencio/aula-virtual/didData/templates/didData/generado/generadoTab_'
    
    #Aqui seria un request del html generado
    #return render(request, nombrearchivo, {'ActividadDet': actividadesDet})

    return render(request, 'didData/generado/generadoTab_' + str(pk) + '.html') 


##################################################################################################################
######## EN DESUSO ###################
##################################################################################################################
def listaMaterias(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    return render(request, 'didData/listaMaterias.html', { 'Materias' : materias })

def indiceMaterias(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    return render(request, 'didData/index0.html', { 'Materias' : materias })



def indiceTemasPorMateria(request, idEstaMateria):
    
    materias = Materia.objects.filter(activa=True, identificacion=idEstaMateria).order_by('identificacion')
    temas = Tema.objects.select_related('idMateria').order_by('idMateria')
    return render(request, 'didData/index0.html', { 'Materias' : materias, 'Temas' : temas })
#hay que probar esto
#{% esteTema = Temas.objects.filter(identificacion=materia.identificacion).order_by('identificacion') %}


def nuevoTema(request):
    form = temaForm()
    return render(request, 'didData/editTema.html', {'form': form})