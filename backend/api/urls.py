from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from webapp.views import change_password

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)




urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('change-password/', change_password, name='change-password'),
    
    path('', views.getRoutes),
]