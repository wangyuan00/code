# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-27 16:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_vedio_learn_times'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Vedio',
            new_name='Video',
        ),
    ]
