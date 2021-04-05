from django.test import TestCase

# Create your tests here.
class ApisTests():

    def test_weather():
        response = self.client.get('/weather')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'weather.html')