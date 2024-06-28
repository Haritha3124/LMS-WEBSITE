from django.contrib import admin
from django.urls import path, include
from webapp.views import CourseListCreateAPIView, CourseRetrieveUpdateDestroyAPIView,MycourseDetailView,MycourseListView,FavouritecourseDetailView,FavouritecourseListView, add_to_cart, add_to_fav
from webapp.views import register_user

urlpatterns = [
     path('register/', register_user, name='register'),
    path('admin/', admin.site.urls),
    path('courses/', CourseListCreateAPIView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyAPIView.as_view(), name='course-retrieve-update-destroy'),
    path('mycourses/', MycourseListView.as_view(), name='mycourse-list'),
    path('mycourses/<int:pk>/', MycourseDetailView.as_view(), name='mycourse-detail'),
    path('favouritecourses/', FavouritecourseListView.as_view(), name='favouritecourse-list'),
    path('favouritecourses/<int:pk>/', FavouritecourseDetailView.as_view(), name='favouritecourse-detail'),
    path('add_to_cart/', add_to_cart, name='add_to_cart'),
    path('add_to_fav/', add_to_fav, name='add_to_fav'),
    path('api/', include('api.urls')),
]
 