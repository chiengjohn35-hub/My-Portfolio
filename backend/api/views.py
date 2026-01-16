from django.shortcuts import render
from rest_framework import response, viewsets 
from .models import SendEmail
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import SendEmailSerializer


# Create your views here.


class SendEmailViewSet(viewsets.ModelViewSet):
    queryset = SendEmail.objects.all()
    serializer_class = SendEmailSerializer

    def post(self, request, *args, **kwargs):
        serializer = SendEmailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)            