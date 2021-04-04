from django.urls import path
from .views import *

urlpatterns = [
    # path('location', views.location, name='location'),
    path('weather', Weather.as_view(template_name='weather.html'), name='weather'),
]

