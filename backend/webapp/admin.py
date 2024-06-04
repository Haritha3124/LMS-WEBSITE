from django.contrib import admin
from .models import Course, Mycourse, Note
# Register your models here.

admin.site.register(Course)
admin.site.register(Mycourse)

admin.site.register(Note)
