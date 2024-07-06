from rest_framework import serializers
from .models import Course, Mycourse, Favouritecourse

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id','course_name', 'title', 'duration','link',]

class MyCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mycourse
        fields = ['id', 'user','user_course_name','user_title','user_duration','user_link']
    
    def validate(self, data):
        user = data['user']
        user_course_name = data['user_course_name']
        user_title = data['user_title']
        
        if Mycourse.objects.filter(user=user, user_course_name=user_course_name, user_title=user_title).exists():
            raise serializers.ValidationError("Course already exists in the cart.")
        
        return data

class FavouritecourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favouritecourse
        fields = ['id', 'user','user_course_name','user_title','user_duration','user_link']
        
    def validate(self, data):
        user = data['user']
        user_course_name = data['user_course_name']
        user_title = data['user_title']
        
        if Favouritecourse.objects.filter(user=user, user_course_name=user_course_name, user_title=user_title).exists():
            raise serializers.ValidationError("Course already exists in the cart.")
        
        return data