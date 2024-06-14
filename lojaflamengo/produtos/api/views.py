from rest_framework.viewsets import ModelViewSet

from produtos.api.serializers import ProdutoSerializer
from produtos.models import Produto

class ProdutoViewSet(ModelViewSet):
    serializer_class = ProdutoSerializer
    queryset = Produto.objects.all()