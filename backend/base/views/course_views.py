from django.core.checks import messages
from django.shortcuts import render
from rest_framework import serializers

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Course, Instructor, Review
from base.serializers import CourseSerializer, InstructorSerializer
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getCourses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCourseReview(request, pk):
    user = request.user
    course = Course.objects.get(id=pk)
    data = request.data

    # 1 Review already exist
    alreadyExist = course.review_set.filter(user=user).exists()

    if alreadyExist:
        content = {'detail': 'Course already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2- No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3- Create Review
    else:
        review = Review.objects.create(
            user=user,
            course=course,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = course.review_set.all()
        course.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        course.rating = total / len(reviews)
        course.save()

        return Response('Review Added')


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createCourse(request):
    user = request.user
    course = Course.objects.create(
        user=user,
        name='Sample name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)
