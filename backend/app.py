from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/my_test')
def test_api():
    url = "https://xml.avra.vacations/services/webservice.asmx?op=HotelsSearch"
    username = 'liyanahotels'
    password = '@60033*'

    try:
        response = requests.get(url, auth=(username, password))
        
        if response.status_code == 200:
            # Successful response
            return jsonify({"message": "Successfully tested the endpoint"}), 200
        elif response.status_code == 404:
            # Handle page not found error
            return jsonify({"error": "Page not found"}), 404
        else:
            return jsonify({"error": "Unexpected status code"}), 500    
    except requests.RequestException as e:
        # Handle request exception
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
