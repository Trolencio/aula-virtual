from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
# Create your models here.


#Clase Materia
class Materia(models.Model):
    identificacion = models.IntegerField()
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()
    comentario = models.TextField
    activa = models.BooleanField()
    
    def activar(self):
        self.activa = True,
        self.save()    
    
    def __str__(self):
        return self.nombre    


#Clase tipoActividad
class TipoActividad(models.Model):
    identificacion = models.IntegerField()
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()
    comentario = models.TextField
    activa = models.BooleanField()
        
    def activar(self):
        self.activa = True,
        self.save()    
        
    def __str__(self):
        return self.nombre  

#Clase Tema
class Tema(models.Model):
    idMateria = models.ForeignKey(Materia)
    identificacion = models.IntegerField()
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    comentario = models.TextField
    activa = models.BooleanField()
    
    def activar(self):
        self.activa = True,
        self.save()    
    
    def __str__(self):
        return self.nombre    
    
#Clase Actividad
class Actividad(models.Model):
    idTema = models.ForeignKey(Tema)
    idTipoActividad = models.ForeignKey(TipoActividad)
    identificacion = models.IntegerField()
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    comentario = models.TextField()
    activa = models.BooleanField()
    
    def activar(self):
        self.activa = True,
        self.save()    
    
    def __str__(self):
        return self.nombre
    
#Clase Detalle de Actividad
class ActividadDet(models.Model):
    idActividad = models.ForeignKey(Actividad)
    identificacion = models.IntegerField()
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    contenido = models.TextField()
    mediaAsociado = models.CharField(max_length=50)
    sonido = models.CharField(max_length=50)
    video = models.CharField(max_length=50)
    imagen = models.CharField(max_length=50)
    slider = models.CharField(max_length=50)
    otroMedia = models.CharField(max_length=50)
    
    activa = models.BooleanField()
    
    def activar(self):
        self.activa = True,
        self.save()    
    
    def __str__(self):
        return self.nombre
    
#Clase Meadia en Actividad
class MediaInActividad(models.Model):
    idTema = models.ForeignKey(Tema)
    idActividad = models.ForeignKey(Actividad)
    identificacion = models.IntegerField()
    nombre =models.CharField(max_length=100) #Titulo deltooltip
    palabra = models.CharField(max_length=100) #palabra asociada en actividad 
    tipo = models.CharField(max_length=100) #Tipo de ToolTip
    titulo = models.TextField() #Titulo del texto contenido dentro del tooltip (cuando hay texto)
    contenido = models.TextField() #texto contenido dentro del tooltip (cuando hay texto)
    imagen = models.CharField(max_length=200) #url completa para ubicar la imagen del tooltip    
    path = models.CharField(max_length=200) #ubicacion del recurso si aplica
    extension = models.CharField(max_length=10) #extension del recurso si aplica
    activa = models.BooleanField() #siempre
    
    def activar(self):
        self.activa = True,
        self.save()    
    
    def __str__(self):
        return self.nombre
    
    
    #Clase slider
class Slider(models.Model):
    idActividad = models.ForeignKey(Actividad)
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=200)
    activa = models.BooleanField()
        
    def activar(self):
        self.activa = True,
        self.save()    
        
    def __str__(self):
        return self.nombre
    
class SliderDet(models.Model):
    idSlider = models.ForeignKey(Slider)
    orden = models.IntegerField() #orden de aparicion
    imagen = models.CharField(max_length=200) #url completa para ubicar la imagen
    titulo = models.CharField(max_length=50) #texto que se despliega si la imagen falla
    leyenda = models.CharField(max_length=200) #leyenda de la imagen (para posterior implementacion)
    activa = models.BooleanField()#para poder desactivarla
    
    def activar(self):
        self.activa = True,
        self.save()    
        
    def __str__(self):
        return self.titulo    
