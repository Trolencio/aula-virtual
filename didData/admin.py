
from django.contrib import admin
from .models import Materia
from .models import TipoActividad
from .models import Tema
from .models import Actividad
from .models import actividadDet
from .models import mediaInActividad

admin.site.register(Materia)
admin.site.register(TipoActividad)
admin.site.register(Tema)
admin.site.register(Actividad)
admin.site.register(actividadDet)
admin.site.register(mediaInActividad)