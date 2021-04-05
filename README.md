# weather-anywhere
Django and React Apps that allow you to check the weather from any location

The Django app grabs location information from your IP address via API, and sends it to the weather API, so you can get up-to-date weather for your location. Includes converting temperatures to Fahrenheit.

The React app grabs location information and displays it to you. The only weather information it displays is for Seattle, since the developer behind it is still pretty new to React and has a lot left to learn. Goal is to pass information along from the location API to the weather API.


**Note: Neither of these are production-ready**

# How to Run These

- Grab your API keys
    - Navigate to [ipstack.com](https://ipstack.com/)
    - Click the orange button to sign up and get your free API key

    - Navigate to [weatherbit.io](https://www.weatherbit.io/)
    - Sign up to get yout free API key

## Django Version
- run `pipenv shell` and `pipenv install`
- Create a `.env` file at the top level of the `weather_backend` directory
- Fill in these values:
```
DJANGO_SECRET_KEY=django secret key hash -> can make your own
IPSTACK_API_KEY=API key from ipstack
WEATHERBIT_API_KEY=API key from weatherbit
```
- export each environment variable in your terminal.
    example: `export DJANGO_SECRET_KEY=123`
- from the top level directory of `weather_backend` run `python manage.py migrate`, then `python manage.py runserver`
- navigate to `http://127.0.0.1:8000/weather` to see your localized weather report

## React Version
- run `npm i`
- Create a `.env` file at the top level of the `weather-frontend` directory
- Fill in these values:
```
REACT_APP_IPSTACK_API_KEY=key from ipstack
REACT_APP_WEATHERBIT_API_KEY=API key from weatherbit
```
- export each environment variable in your terminal
- from the top level directory of `weather-frontend`, run `npm start`
- your browser should pop open a window at `http://localhost:3000/`, displaying your curreny location, and the weather for Seattle


### Places for improvement
- The React app is only halfway functional
- Both apps need better test coverage
- General styling
- General production-proofing, especially in the React app

#### Lingering questions
- What elements should be tested in a Django app that doesn't use any models?
- How can I pass data from the location API to the weather API in the React app?
- Could I process the APIs in a Django backend, then feed them to a React frontend without utilizing a database, and Django REST Framework? 