# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-26 18:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_course_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='tag',
            field=models.CharField(default='', max_length=20, verbose_name='\u8bfe\u7a0b\u6807\u7b7e'),
        ),
    ]
