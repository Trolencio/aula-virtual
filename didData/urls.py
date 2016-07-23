from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.indiceTemas),
    url(r'^didData/nuevo/$', views.nuevoTema, name='nuevoTema'),
    url(r'^didData/(?P<pk>[0-9]+)/$', views.detalleTema),
    url(r'^didData/actividadDet/(?P<pk>[0-9]+)/$', views.detalleActividadArdora, name='detalleActividadArdora'),
]

#Esta no fx
#url(r'^didData/detAct/(?P<pk_ard>[0-9]+)/$', views.detalleActividadArdora),s