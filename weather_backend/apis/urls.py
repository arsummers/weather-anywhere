from django.urls import path
from . import views

urlpatterns = [
    path('location', views.location, name='location'),
    path('weather', views.weather, name='weather'),
]

