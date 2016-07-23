    

from django import forms

from .models import Tema

class temaForm(forms.ModelForm):

    class Meta:
        model = Tema
        fields = ('idMateria', 'identificacion', 'nombre', 'descripcion', 'activa',)