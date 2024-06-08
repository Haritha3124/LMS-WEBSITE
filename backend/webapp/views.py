from rest_framework import generics
from .models import Course, Mycourse
from .serializers import CourseSerializer, MyCourseSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
# from rest_framework import viewsets

class CourseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class MycourseListView(generics.ListCreateAPIView):
    serializer_class = MyCourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Mycourse.objects.filter(user=self.request.user)

class MycourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MyCourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Mycourse.objects.filter(user=self.request.user)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    if request.method == 'POST':
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = MyCourseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        data = request.data
        try:
            user = User.objects.create(
                username=data['username'],
                email=data['email'],
                password=make_password(data['password']),
                first_name=data['first_name'],
                last_name = data['last_name']
            )
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)