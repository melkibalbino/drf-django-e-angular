# Generated by Django 2.1.4 on 2019-10-13 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoapi', '0002_dummy_tasks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='create_on',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='due_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
