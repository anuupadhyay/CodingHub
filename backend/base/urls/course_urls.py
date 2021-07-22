from django.urls import path
from base.views import course_views as views

urlpatterns = [

    path('', views.getCourses, name="courses"),
    path('live/', views.getLiveCourses, name="liveCourses"),
    path('online/', views.getOnlineCourses, name="onlineCourses"),
    path('<str:pk>/reviews/', views.createCourseReview, name="create-review"),
    path('<str:pk>/', views.getCourse, name="course"),
    # path('online/', views.updateUserProfile, name="user-profile-update"),
    # path('<str:pk>/', views.getPost, name="post"),
]
