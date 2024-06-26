from django.contrib import admin
from django.urls import path, include
from webapp.views import CourseListCreateAPIView, CourseRetrieveUpdateDestroyAPIView,MycourseDetailView,MycourseListView,FavouritecourseDetailView,FavouritecourseListView, add_to_cart
from webapp.views import register_user

urlpatterns = [
     path('register/', register_user, name='register'),
    path('admin/', admin.site.urls),
    path('courses/', CourseListCreateAPIView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyAPIView.as_view(), name='course-retrieve-update-destroy'),
    path('mycourses/', MycourseListView.as_view(), name='mycourse-list'),
    path('mycourses/<int:pk>/', MycourseDetailView.as_view(), name='mycourse-detail'),
    path('favouritecourses/', MycourseListView.as_view(), name='mycourse-list'),
    path('favouritecourses/<int:pk>/', MycourseDetailView.as_view(), name='mycourse-detail'),
    path('add_to_cart/', add_to_cart, name='add_to_cart'),
    path('api/', include('api.urls')),
]
 