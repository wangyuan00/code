# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-07-25 19:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0004_auto_20170725_1741'),
    ]

    operations = [
        migrations.AddField(
            model_name='courseorg',
            name='classics_course',
            field=models.CharField(default='\u6570\u636e\u5e93\u8bbe\u8ba1', max_length=100, verbose_name='\u7ecf\u5178\u8bfe\u7a0b'),
        ),
    ]
