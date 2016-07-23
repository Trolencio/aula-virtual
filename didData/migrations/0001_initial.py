# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actividad',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=200)),
                ('descripcion', models.TextField()),
                ('comentario', models.TextField()),
                ('activa', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='actividadDet',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('contenido', models.TextField()),
                ('mediaAsociado', models.CharField(max_length=50)),
                ('sonido', models.CharField(max_length=50)),
                ('video', models.CharField(max_length=50)),
                ('imagen', models.CharField(max_length=50)),
                ('slider', models.CharField(max_length=50)),
                ('otroMedia', models.CharField(max_length=50)),
                ('activa', models.BooleanField()),
                ('idActividad', models.ForeignKey(to='didData.Actividad')),
            ],
        ),
        migrations.CreateModel(
            name='Materia',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.TextField()),
                ('activa', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='mediaInActividad',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=100)),
                ('path', models.CharField(max_length=200)),
                ('extension', models.CharField(max_length=10)),
                ('contenido', models.TextField()),
                ('imagen', models.CharField(max_length=100)),
                ('activa', models.BooleanField()),
                ('idActividad', models.ForeignKey(to='didData.Actividad')),
            ],
        ),
        migrations.CreateModel(
            name='Tema',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=200)),
                ('descripcion', models.TextField()),
                ('activa', models.BooleanField()),
                ('idMateria', models.ForeignKey(to='didData.Materia')),
            ],
        ),
        migrations.CreateModel(
            name='TipoActividad',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('identificacion', models.IntegerField()),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.TextField()),
                ('activa', models.BooleanField()),
            ],
        ),
        migrations.AddField(
            model_name='actividad',
            name='idTema',
            field=models.ForeignKey(to='didData.Tema'),
        ),
        migrations.AddField(
            model_name='actividad',
            name='idTipoActividad',
            field=models.ForeignKey(to='didData.TipoActividad'),
        ),
    ]
