# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-26 11:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0006_auto_20170725_1950'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='image',
            field=models.ImageField(default='', upload_to='teacher/%Y/%m', verbose_name='\u6559\u5e08\u5934\u50cf'),
        ),
    ]
