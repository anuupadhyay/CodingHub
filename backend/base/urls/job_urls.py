from django.urls import path
from base.views import job_views as views

urlpatterns = [
    path('apply-for-jobs/', views.getJobs, name="jobs"),
    path('post-a-job/', views.postJob, name="post-job"),
    path('<str:pk>/candidate-job-application/',
         views.applyJob, name="apply-job"),
    path('<str:pk>/', views.getJob, name="job"),
]
