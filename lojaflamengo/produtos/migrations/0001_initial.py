# Generated by Django 5.0.6 on 2024-06-14 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('preco', models.DecimalField(decimal_places=2, max_digits=5)),
                ('genero', models.CharField(choices=[('fem', 'Feminino'), ('mas', 'Masculino'), ('inf', 'Infantil'), ('ace', 'Acessórios')], max_length=3)),
                ('tipo_produto', models.CharField(choices=[('acess', 'Acessórios'), ('camis', 'Camisetas'), ('manto', 'Mantos'), ('shorts', 'Shorts'), ('blusa', 'Blusas'), ('moleto', 'Moletons')], max_length=6)),
                ('tipo_jogo', models.IntegerField(blank=True, null=True)),
                ('tamanho_camiseta_moleton', models.CharField(blank=True, max_length=2, null=True)),
                ('numero_short', models.IntegerField(blank=True, null=True)),
                ('quantidade_estoque', models.PositiveIntegerField(default=0)),
                ('imagem', models.ImageField(upload_to='produtos/')),
            ],
        ),
    ]