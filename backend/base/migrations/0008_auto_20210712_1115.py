# Generated by Django 3.1.7 on 2021-07-12 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20210712_1049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='salary',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]