from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Post, Recruiter, Tutorial, Instructor, Course, Review, Job, CandidateApplication
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()
    author = serializers.SlugRelatedField(
        queryset=User.objects.all(), slug_field='username'
    )

    class Meta:
        model = Post
        fields = '__all__'


class TutorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutorial
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']

    def get_id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'


class InstructorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Instructor
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only="True")
    instructor_name = serializers.CharField(
        source='instructor.name', read_only=True)
    work_description = serializers.CharField(
        source='instructor.work_description', read_only=True)
    full_detail = serializers.CharField(
        source='instructor.full_detail', read_only=True)

    class Meta:
        model = Course
        fields = ['user', 'id', 'name', 'description', 'image',
                  'overview', 'rating', 'numReviews', 'price',
                  'course_type', 'paid_or_free', 'instructor_name',
                  'work_description', 'full_detail', 'reviews']

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data


"""     def get_instructor(self, obj):
        instructor = obj.name
        serializer = InstructorSerializer(instructor, many=True)
        return serializer.data """


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = '__all__'


class CandidateApplicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = CandidateApplication
        fields = '__all__'


class RecruiterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recruiter
        fields = '__all__'
