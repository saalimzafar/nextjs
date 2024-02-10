from flask import Flask, render_template
from flask_socketio import SocketIO
import requests
import csv
import threading
import time

app = Flask(__name__)
socketio = SocketIO(app)

brands_data = []

def fetch_brands_data():
    while True:
        try:
            dev_url = "https://docs.google.com/spreadsheets/d/1E0Re5Kdyd_uKG3EzaRiT8O9yk4cD_iYdqkxlCJOCeUw/export?format=csv"
            client_link = "https://docs.google.com/spreadsheets/d/10IbDX4gTNYca9BLFlmB3w1G_pM_uvUsgV0rNEe6ihjo/export?format=csv"
            response = requests.get(client_link)
            data = response.text
            brands = parse_csv_to_json(data)
            global brands_data
            brands_data = brands
            socketio.emit('brands_data', brands)
        except Exception as e:
            print("Error fetching brands:", e)
        time.sleep(10)  # Fetch data every 10 seconds

def parse_csv_to_json(csv_data):
    lines = csv_data.splitlines()
    reader = csv.DictReader(lines)
    return [row for row in reader]

@app.route('/brandsdemo')
def index():
    global brands_data
    return render_template('index.html', brands_data=brands_data)

if __name__ == '__main__':
    # Start a separate thread to fetch brands data periodically
    threading.Thread(target=fetch_brands_data, daemon=True).start()
    # Run the Flask app on a different port, for example, 8000
    socketio.run(app, port=8000, debug=True)
