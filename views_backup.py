from django.core.checks import messages
from django.shortcuts import render
from rest_framework import serializers

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import Post, Tutorial
from django.contrib.auth.models import User
from .serializers import PostSerializer, TutorialSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status

# Create your views here.


@api_view(['GET'])
def getTutorials(request):
    tutorials = Tutorial.objects.all()
    serializer = TutorialSerializer(tutorials, many=True)
    return Response(serializer.data)
