from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

DATABASE_URL = os.environ.get('DATABASE_URL', 'postgresql://neondb_owner:npg_Pjodb46xSfJT@ep-purple-term-aduvkfrb-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')

def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    return conn

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()

        if not data:
            return jsonify({'error': 'No data provided'}), 400

        registration_type = data.get('registration_type', 'course-only')

        conn = get_db_connection()

        cursor = conn.cursor()

        if registration_type == 'course-only':
            # Basic registration
            cursor.execute('''
                INSERT INTO course_registrations (full_name, phone, instagram_link)
                VALUES (%s, %s, %s)
            ''', (
                data.get('fullName'),
                data.get('phone'),
                data.get('instagramLink')
            ))
        elif registration_type == 'work-with-rava':
            # Full registration
            cursor.execute('''
                INSERT INTO rava_registrations (
                    full_name, phone, instagram_link, why_register, goal, content_area,
                    has_advertised, challenges, favorite_post, role_model, rava_interest,
                    satisfied_brands, monthly_income
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ''', (
                data.get('fullName'),
                data.get('phone'),
                data.get('instagramLink'),
                data.get('whyRegister'),
                data.get('goal'),
                data.get('contentArea'),
                data.get('hasAdvertised'),
                data.get('challenges'),
                data.get('favoritePost'),
                data.get('roleModel'),
                data.get('ravaInterest'),
                data.get('satisfiedBrands'),
                data.get('monthlyIncome')
            ))
        else:
            cursor.close()
            conn.close()
            return jsonify({'error': 'Invalid registration type'}), 400

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({
            'message': 'Registration successful',
            'registration_type': registration_type
        }), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/registrations/<registration_type>', methods=['GET'])
def get_registrations(registration_type):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor = conn.cursor(cursor_factory=RealDictCursor)

        if registration_type == 'course-only':
            cursor.execute('SELECT * FROM course_registrations ORDER BY created_at DESC')
        elif registration_type == 'work-with-rava':
            cursor.execute('SELECT * FROM rava_registrations ORDER BY created_at DESC')
        else:
            cursor.close()
            conn.close()
            return jsonify({'error': 'Invalid registration type'}), 400

        registrations = cursor.fetchall()
        cursor.close()
        conn.close()

        # Convert to list of dicts
        result = [dict(row) for row in registrations]

        return jsonify(result), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)