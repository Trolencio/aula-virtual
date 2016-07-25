# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-23 00:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('didData', '0003_auto_20160722_1753'),
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