# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-25 19:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0005_courseorg_classics_course'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courseorg',
            name='classics_course',
            field=models.CharField(max_length=100, verbose_name='\u7ecf\u5178\u8bfe\u7a0b'),
        ),
    ]