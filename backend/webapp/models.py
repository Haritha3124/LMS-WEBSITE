from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    course_name = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    link = models.URLField()

    def __str__(self):
        return self.title

class Mycourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    user_course_name = models.CharField(max_length=50)
    user_title = models.CharField(max_length=100)
    user_duration = models.CharField(max_length=50)
    user_link = models.URLField()

    def __str__(self):
        return self.user_title
    
class Favouritecourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    user_course_name = models.CharField(max_length=50)
    user_title = models.CharField(max_length=100)
    user_duration = models.CharField(max_length=50)
    user_link = models.URLField()

    def __str__(self):
        return self.user_title
    