from django.shortcuts import render
import requests
import os
from django.views.generic import TemplateView
from .services import get_weather, get_location

class Weather(TemplateView):
    """
    grabs weather and location data from services.py
    """
    def get(self, request):
        weather = get_weather()
        return render(request, 'weather.html', weather)
    