import requests
import os

api_key = "AIzaSyB3xaooTJtdah71Galn_TuxdhMKwICTusk"
url = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"

try:
    response = requests.get(url)
    if response.status_code == 200:
        models = response.json().get('models', [])
        print("Relevant Models:")
        for m in models:
            name = m['name']
            if 'gemini' in name or 'imagen' in name:
                print(f"- {name}")
    else:
        print(f"Error: {response.status_code} - {response.text}")
except Exception as e:
    print(f"Exception: {e}")
