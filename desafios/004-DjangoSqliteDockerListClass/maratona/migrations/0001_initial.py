# Generated by Django 3.0.6 on 2020-07-04 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aulas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('img_link', models.CharField(max_length=255)),
                ('video_link', models.CharField(max_length=255)),
            ],
        ),
    ]
