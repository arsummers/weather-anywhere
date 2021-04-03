from django.shortcuts import render
import requests
import os

def location(request):
    #but how to make the IP address part dynamic??
    ip_address = os.environ.get('IP_ADDRESS')
    ip_api_key = os.environ.get('IPSTACK_API_KEY')

    response = requests.get(f'http://api.ipstack.com/check?access_key={ip_api_key}')
    location_data = response.json()
    return render(request, 'location.html', {
        'ip' : location_data['ip'],
        'country' : location_data['country_name']
    })