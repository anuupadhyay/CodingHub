from django.contrib import admin

from .models import *

admin.site.register(Post)
admin.site.register(Tutorial)
admin.site.register(Course)
admin.site.register(Review)
admin.site.register(Instructor)

# Register your models here.
