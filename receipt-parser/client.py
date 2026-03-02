import requests

url = "http://localhost:8000/parser"
files = {'file': open('receipt.png', 'rb')}
response = requests.post(url, files=files)

print(response.json())
