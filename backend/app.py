# this_file = "venv/bin/activate_this.py"
# exec(open(this_file).read(), {'__file__': this_file})

from flask import Flask, request, send_file, render_template
import flask
from flask_cors import CORS
from Crypto.Cipher import AES
import base64
from random import randint
from dotenv import load_dotenv
import os
import unicodedata
import mysql.connector

application = Flask(__name__)
CORS(application, supports_credentials=True)

load_dotenv()

KEY = os.getenv('ENCRYPTION_KEY')
HOST = os.getenv('DATABASE_HOST')
NAME = os.getenv('DATABASE_NAME')
USER = os.getenv('DATABASE_USER')
PASSWORD = os.getenv('DATABASE_PASSWORD')


def add_response_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,Cache-Control')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


# test connection
@application.route('/hello')
def hello_world():
    return "Hello World"


@application.route('/')
def send_html():
    return send_file('dist/index.html')


@application.route('/assets/<file>')
def send_assert(file=None):
    return send_file(f'dist/assets/{file}')


@application.route('/<folder>/<file>')
def send_image(folder=None, file=None):
    return send_file(f'dist/{folder}/{file}')


@application.route('/me.png')
def send_me_image():
    return send_file('dist/me.png')


@application.route('/simplicityDev.png')
def send_favicon_image():
    return send_file('dist/simplicityDev.png')


def create_iv():
    iv = ''
    for i in range(16):
        iv += str(randint(0, 9))
    return iv


def message_16_bytes(message):
    number_space = 16 - (len(message) % 16)
    return message + ' ' * number_space


def delete_accents(message):
    return ''.join(c for c in unicodedata.normalize('NFD', message) if unicodedata.category(c) != 'Mn')


@application.route('/encrypt', methods=['POST', 'GET'])
def encrypt():
    try:
        args = request.json
        message = args['message']
        message = message_16_bytes(message)
        message = delete_accents(message)
        iv = bytes(create_iv(), 'utf-8')
        key = bytes(KEY, 'utf-8')
        cipher = AES.new(key, AES.MODE_CBC, iv)
        encrypted_message = cipher.encrypt(message.encode())
        encrypted_base64 = base64.b64encode(encrypted_message).decode()

        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER,
                                             password=PASSWORD)
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = f"INSERT INTO message_encrypt (content, iv) VALUES ('{encrypted_base64}', '{iv.decode('utf-8')}');"
        cursor.execute(sql_requests)
        connection.commit()
        return flask.jsonify({
            'message': encrypted_base64
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/decrypt', methods=['POST', 'GET'])
def decrypt():
    try:
        args = request.json
        encrypted_message_base64 = args['message']

        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER,
                                             password=PASSWORD)
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = f"SELECT iv FROM message_encrypt WHERE content = '{encrypted_message_base64}';"
        cursor.execute(sql_requests)

        iv = cursor.fetchall()[0][0]
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

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


if __name__ == "__main__":
    application.run(debug=True, host="0.0.0.0", port=5000)
