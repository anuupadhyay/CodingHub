# Generated by Django 3.1.7 on 2021-07-12 05:19

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0006_category_jobs'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Jobs',
            new_name='Job',
        ),
    ]