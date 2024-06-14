from django.db import models

class Produto(models.Model):
    TIPO_PRODUTO_CHOICES = [
        ('acess', 'Acessórios'),
        ('camis', 'Camisetas'),
        ('manto', 'Mantos'),
        ('shorts', 'Shorts'),
        ('blusa', 'Blusas'),
        ('moleto', 'Moletons'),
    ]

    GENERO_CHOICES = [
        ('fem', 'Feminino'),
        ('mas', 'Masculino'),
        ('inf', 'Infantil'),
        ('sem', 'Sem Gênero'),
    ]

    TIPO_JOGO_CHOICES = [
        ('1', 'Jogo 1'),
        ('2', 'Jogo 2'),
        ('3', 'Jogo 3'),

    ]

    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=5, decimal_places=2)
    genero = models.CharField(max_length=3, choices=GENERO_CHOICES)
    tipo_produto = models.CharField(max_length=6, choices=TIPO_PRODUTO_CHOICES)
    tipo_jogo = models.CharField(max_length= 1, choices= TIPO_JOGO_CHOICES, blank=True, null=True)
    tamanho_camiseta_moleton = models.CharField(max_length=2, blank=True, null=True)
    numero_short = models.PositiveIntegerField(blank=True, null=True)
    quantidade_estoque = models.PositiveIntegerField(default=0)
    imagem = models.ImageField(upload_to='produtos/')
    
    def __str__(self):
        produto_str = f"{self.nome} - R${self.preco:.2f}"
        
        if self.tipo_jogo:
            produto_str += f" - Manto {self.tipo_jogo}"
        
        if self.tamanho_camiseta_moleton:
            produto_str += f" - Tamanho: {self.tamanho_camiseta_moleton}"
        
        if self.numero_short:
            produto_str += f" - Número: {self.numero_short}"
        
        produto_str += f" - Quantidade em Estoque: {self.quantidade_estoque}"
        
        return produto_str
