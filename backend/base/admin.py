from django.contrib import admin

from .models import *

admin.site.register(Post)
admin.site.register(Tutorial)
admin.site.register(Course)
admin.site.register(Review)
admin.site.register(Instructor)
admin.site.register(Category)
admin.site.register(Job)
admin.site.register(Recruiter)
admin.site.register(CandidateApplication)

# Register your models here.
