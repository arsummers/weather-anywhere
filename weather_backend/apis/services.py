import os
import requests

def get_location():
    """
    returns the city name, latitude, and longitude for the user's IP address
    """
    ipstack_api_key = os.environ.get('IPSTACK_API_KEY')

    response = requests.get(f'http://api.ipstack.com/check?access_key={ipstack_api_key}')

    location_data = response.json()


    location = {'city': location_data['city'], 'latitude': location_data['latitude'], 'longitude': location_data['longitude']} 

    return location

def get_weather():
    """
    gathers information from get_location, plugs lat/lon coordinates into the weatherbit API URL, returns current weather for user's location
    """

    weatherbit_api_key = os.environ.get('WEATHERBIT_API_KEY')

    coordinates = get_location()

    latitude = coordinates['latitude']
    longitude = coordinates['longitude']

    response = requests.get(f'https://api.weatherbit.io/v2.0/current?key={weatherbit_api_key}&lat={latitude}&lon={longitude}')

    weather_data = response.json()

    celsius_temp = weather_data['data'][0]['temp']
    fahrenheit_temp = int((celsius_temp * 9/5) + 32)

    city_and_weather = {'city_name': coordinates['city'],'weather_desc': weather_data['data'][0]['weather']['description'].lower(), 'temperature': fahrenheit_temp}

    return city_and_weather
