from django.core.checks import messages
from django.shortcuts import render
from rest_framework import serializers

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Job, Recruiter, CandidateApplication
from base.serializers import JobSerializer, RecruiterSerializer, CandidateApplicationSerializer
from rest_framework import status


@api_view(['GET'])
def getJobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getJob(request, pk):
    job = Job.objects.get(id=pk)
    serializer = JobSerializer(job, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def postJob(request):
    data = request.data

    try:
        recruiter = Recruiter.objects.create(
            full_name=data['name'],
            email=data['email'],
            phone_number=data['phone'],
            company_name=data['companyName'],
            designation=data['designation']
        )
        serializer = RecruiterSerializer(recruiter, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Recruiter with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def applyJob(request, pk):
    data = request.data
    job = Job.objects.get(id=pk)
    try:
        candidate = CandidateApplication.objects.create(
            job=job,
            full_name=data['name'],
            email=data['email'],
            phone_number=data['phone'],
            highest_qualification=data['qualification'],
            college=data['college'],
            passing_year=data['passingYear'],
            current_organization=data['organization'],
            work_experience=data['experience'],
            current_ctc=data['currentCTC'],
            expected_ctc=data['expectedCTC'],
            notice_period=data['noticePeriod'],
            relocate=data['relocate'],
            # job_role=data['job'],
            current_location=data['location'],
        )
        serializer = CandidateApplicationSerializer(candidate, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Something is wrong'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
