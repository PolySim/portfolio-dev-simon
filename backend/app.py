from flask import Flask, request, send_file, render_template
import flask
from flask_cors import CORS
import json
from Crypto.Util.Padding import unpad
from Crypto.Cipher import AES
import base64
from random import randint
from dotenv import load_dotenv
import os

application = Flask(__name__)
CORS(application, supports_credentials=True)

load_dotenv()

KEY = os.getenv('ENCRYPTION_KEY')


# test connection
@application.route('/hello')
def hello_world():
    return "Hello World"


def create_iv():
    iv = ''
    for i in range(16):
        iv += str(randint(0, 9))
    return iv


@application.route('/encrypt')
def encrypt():
    try:
        args = request.json
        message = args['message']
        iv = bytes(create_iv(), 'utf-8')
        key = bytes(KEY, 'utf-8')
        cipher = AES.new(key, AES.MODE_CBC, iv)
        # encrypted_message = cipher.encrypt(message.encode("utf-8"))
        encrypted_message = cipher.encrypt(message.encode())
        encrypted_base64 = base64.b64encode(encrypted_message).decode()
        # base64.b64decode(str(encrypted_message))
        return flask.jsonify({
            'message': encrypted_base64,
            'iv': str(iv.decode('utf-8'))
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


@application.route('/decrypt')
def decrypt():
    try:
        args = request.json
        encrypted_message_base64 = args['message']
        iv = args['iv']
        key = bytes(KEY, 'utf-8')
        encrypted_data = base64.b64decode(encrypted_message_base64.encode())
        cipher = AES.new(key, AES.MODE_CBC, bytes(iv, 'utf-8'))
        decrypted_data = cipher.decrypt(encrypted_data)
        return flask.jsonify({
            'message': decrypted_data.decode()
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


if __name__ == "__main__":
    application.run(debug=True, host="0.0.0.0", port=5000)
