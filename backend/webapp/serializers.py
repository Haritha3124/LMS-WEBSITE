from rest_framework import serializers
from .models import Course, Mycourse

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id','course_name', 'title', 'duration','link',]
        
class MyCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mycourse
        fields = ['id','user_course_name', 'user_title', 'user_duration','user_link',]
