from rest_framework import generics
from .models import Course, Mycourse
from .serializers import CourseSerializer, MyCourseSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

class CourseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class MycourseListView(generics.ListCreateAPIView):
    queryset = Mycourse.objects.all()
    serializer_class = MyCourseSerializer

class MycourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mycourse.objects.all()
    serializer_class = MyCourseSerializer

@api_view(['POST'])
def add_to_cart(request):
    if request.method == 'POST':
        serializer = MyCourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
