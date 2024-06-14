from rest_framework import serializers
from usuarios.models import CustomUsuario

class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUsuario
        fields = ['nome', 'cpf', 'email', 'senha', 'data_nascimento']
    
    def validate_cpf(self, value):
        """
        Valida se o CPF já existe no banco de dados.
        """
        if CustomUsuario.objects.filter(cpf=value).exists():
            raise serializers.ValidationError("CPF já cadastrado.")
        return value