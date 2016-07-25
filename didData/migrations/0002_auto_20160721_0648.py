# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-21 11:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('didData', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='actividad',
            name='id',
        ),
        migrations.RemoveField(
            model_name='actividaddet',
            name='id',
        ),
        migrations.RemoveField(
            model_name='mediainactividad',
            name='id',
        ),
        migrations.AddField(
            model_name='mediainactividad',
            name='palabra',
            field=models.CharField(default=' ', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='mediainactividad',
            name='titulo',
            field=models.TextField(default=' '),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='actividad',
            name='identificacion',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='actividaddet',
            name='identificacion',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='mediainactividad',
            name='identificacion',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]