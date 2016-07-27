
from django.contrib import admin
from .models import Materia
from .models import TipoActividad
from .models import Tema
from .models import Actividad
from .models import ActividadDet
from .models import MediaInActividad

from .models import Slider
from .models import SliderDet


admin.site.register(Materia)
admin.site.register(TipoActividad)
admin.site.register(Tema)
admin.site.register(Actividad)
admin.site.register(ActividadDet)
admin.site.register(MediaInActividad)
admin.site.register(Slider)
admin.site.register(SliderDet)