from django.core.checks import messages
from django.shortcuts import render
from rest_framework import serializers

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course, Instructor
from base.serializers import CourseSerializer, InstructorSerializer
from rest_framework import status


@api_view(['GET'])
def getLiveCourses(request):
    livecourses = Course.objects.filter(course_type='live')
    serializer = CourseSerializer(livecourses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getOnlineCourses(request):
    livecourses = Course.objects.filter(course_type='online')
    serializer = CourseSerializer(livecourses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCourse(request, pk):
    course = Course.objects.get(id=pk)
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getInstructor(request, pk):
    instructor = Instructor.objects.get(id=pk)
    serializer = InstructorSerializer(instructor, many=False)
    return Response(serializer.data)
