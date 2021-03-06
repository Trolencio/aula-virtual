# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-26 16:25
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('didData', '0008_auto_20160726_1023'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=200)),
                ('activa', models.BooleanField()),
                ('idActividad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='didData.Actividad')),
            ],
        ),
        migrations.CreateModel(
            name='SliderDet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orden', models.IntegerField()),
                ('imagen', models.CharField(max_length=200)),
                ('titulo', models.CharField(max_length=50)),
                ('leyenda', models.CharField(max_length=200)),
                ('activa', models.BooleanField()),
                ('idSlider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='didData.Slider')),
            ],
        ),
    ]
