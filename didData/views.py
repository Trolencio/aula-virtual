from django.shortcuts import redirect
import os
from django.core.files import File
from .models import Materia
from .models import Tema
from .models import TipoActividad
from .models import Actividad
from .models import actividadDet
from .models import mediaInActividad

from .fileCreator import createFileVerticalTabs

from .forms import temaForm
from django.shortcuts import render, get_object_or_404

# Create your views here.

def listaMaterias(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    return render(request, 'didData/listaMaterias.html', { 'Materias' : materias })

def indiceMaterias(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    return render(request, 'didData/index0.html', { 'Materias' : materias })

def indiceTemas(request):
    materias = Materia.objects.filter(activa=True).order_by('identificacion')
    temas = Tema.objects.filter(activa=True).order_by('idMateria')
    return render(request, 'didData/index.html', { 'Materias' : materias, 'Temas' : temas })

def indiceTemasPorMateria(request, idEstaMateria):
    
    materias = Materia.objects.filter(activa=True, identificacion=idEstaMateria).order_by('identificacion')
    temas = Tema.objects.select_related('idMateria').order_by('idMateria')
    return render(request, 'didData/index0.html', { 'Materias' : materias, 'Temas' : temas })
#hay que probar esto
#{% esteTema = Temas.objects.filter(identificacion=materia.identificacion).order_by('identificacion') %}


def nuevoTema(request):
    form = temaForm()
    return render(request, 'didData/editTema.html', {'form': form})

def detalleTema(request, pk):
    tema = get_object_or_404(Tema, identificacion=pk) #objeto Tipo Tema identificacion = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado
    var_idTema = tema.id
    actividades = Actividad.objects.filter(idTema=var_idTema).select_related('idTema')
    
    return render(request, 'didData/detalleTema.html', {'Actividades': actividades})

def detalleActividadArdora(request, pk):
    estaactividad = get_object_or_404(Actividad, identificacion=pk) #objeto tipo Actividad identificacion = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado

    actividadesDet = actividadDet.objects.filter(idActividad=estaactividad.identificacion)
    #actividadArdoraDet = actividadDet.select_related('idActividad')
    
    actividadArdoraDet = actividadesDet.select_related('idActividad')
    return render(request, 'didData/detalleActividadArdora.html', {'ActividadDet': actividadArdoraDet})

def detalleActividadPython(request, pk):
    estaactividad = get_object_or_404(Actividad, identificacion=pk) #objeto tipo Actividad identificacion = pk
    #actividades toma la lista de actividades del tema var_idTema, con su objeto Tema relacionado
    actividadesDet = actividadDet.objects.filter(idActividad=estaactividad.identificacion).order_by('identificacion')

    #generar el archivo
    nombrearchivo = createFileVerticalTabs(actividadesDet, pk)
    
    #Aqui seria un request del html generado
    #return render(request, nombrearchivo, {'ActividadDet': actividadesDet})

    return render(request, 'didData/generado/generadoTab_' + str(pk) + '.html') 