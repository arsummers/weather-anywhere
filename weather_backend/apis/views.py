from django.shortcuts import render
import requests
import os
from django.views.generic import TemplateView
from .services import get_weather, get_location

def location(request):
    #need to be able to pass this along to front end, and to weather API

    ipstack_api_key = os.environ.get('IPSTACK_API_KEY')

    response = requests.get(f'http://api.ipstack.com/check?access_key={ipstack_api_key}')

    location_data = response.json()

    return render(request, 'location.html', {
        'ip' : location_data['ip'],
        'country' : location_data['country_name'],
        'latitude' : location_data['latitude'],
        'longitude' : location_data['longitude']
    })

class Weather(TemplateView):
    def get(self, request):
        weather = get_weather()
        return render(request, 'weather.html', weather)
    

# def weather(request):

#     weatherbit_api_key = os.environ.get('WEATHERBIT_API_KEY')

#     response = requests.get(f'https://api.weatherbit.io/v2.0/current?key={weatherbit_api_key}&lat=47.65671920776367&lon=-122.31868743896484')

#     weather_data = response.json()

#     return render(request, 'weather.html', {
#         'city' : weather_data['data'][0]['city_name'],
#         'weather_desc' : weather_data["data"][0]["weather"]["description"],
#     })