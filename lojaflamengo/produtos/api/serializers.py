from rest_framework.serializers import ModelSerializer

from produtos.models import Produto

class ProdutoSerializer(ModelSerializer):

    class Meta:
        model = Produto
        fields = ['nome', 'preco', 'genero', 'tipo_produto', 'tipo_jogo', 'tamanho_camiseta_moleton', 'numero_short', 'quantidade_estoque', 'imagem']