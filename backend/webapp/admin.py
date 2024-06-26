from django.contrib import admin
from .models import Course, Mycourse, Favouritecourse
# Register your models here.

admin.site.register(Course)
admin.site.register(Mycourse)
admin.site.register(Favouritecourse)
