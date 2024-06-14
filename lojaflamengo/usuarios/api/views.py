from rest_framework import viewsets
from usuarios.models import CustomUsuario
from .serializers import UsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = CustomUsuario.objects.all()
    serializer_class = UsuarioSerializer
