import os
import requests

def get_location():
    ipstack_api_key = os.environ.get('IPSTACK_API_KEY')

    response = requests.get(f'http://api.ipstack.com/check?access_key={ipstack_api_key}')

    location_data = response.json()


    location = {'city': location_data['city'], 'latitude': location_data['latitude'], 'longitude': location_data['longitude']} 

    return location

def get_weather():


    weatherbit_api_key = os.environ.get('WEATHERBIT_API_KEY')

    coordinates = get_location()

    latitude = coordinates['latitude']
    longitude = coordinates['longitude']

    response = requests.get(f'https://api.weatherbit.io/v2.0/current?key={weatherbit_api_key}&lat={latitude}&lon={longitude}')

    weather_data = response.json()

    celsius_temp = weather_data['data'][0]['temp']
    fahrenheit_temp = int((celsius_temp * 9/5) + 32)

    weather = {'weather_desc': weather_data['data'][0]['weather']['description'], 'temperature': fahrenheit_temp}


    print(f'The weather in {coordinates["city"]} is {weather["weather_desc"]} and {weather["temperature"]} degrees')

    return f'The weather in {coordinates["city"]} is {weather["weather_desc"]} and {weather["temperature"]} degrees'

get_weather()